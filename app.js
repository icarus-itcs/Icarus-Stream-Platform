const NMS     = require('node-media-server');
const express = require('express');
const app     = express();
const path    = require('path');
const request = require('request-promise');
const config  = require('./config.json');


// Generate a random API key if non-given
if(!config.apiAuth.apiKey){
  config.apiAuth.apiKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  console.log('[IMPORTANT] No API Key given, randomly assigned key (temporary): '+config.apiAuth.apiKey);
} else {
  console.log('Using provided API Key for access!')
}


// Start media server
var nms = new NMS(config);
nms.run();


// Add static assets and engine for routing/template
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


// Grab the stream data (users, apps, etc)
async function getApi(){
  return request('http://127.0.0.1:' + config.http.port + '/api/streams?apiKey='+config.apiAuth.secret);
}


// Check if the stream key matches from the request
async function checkStreamKey(name, reqkey){
  if(reqkey == null){ reqkey = ''; }
  let result  = await getApi();
  let api     = await JSON.parse(result);
  let keys    = await Object.keys(api[name]);
  let key     = keys[0];
  if(reqkey == key){ return true; } else {
    return false;
  }
}

// Is the stream online?
async function isOnline(name){
  let api   = await getApi();
  let json  = JSON.parse(api);
  if(json[name]){
    return true;
  } else {
    return false;
  }
}

/* Routes */
app.get('/', async (req, res) => {
  let host = req.get('host');
  let api = await getApi();
  let json = await JSON.parse(api);
  res.render('home', { api: json, host, port: config.rtmp.port, title: config.isp.title, motto:config.isp.motto });
});

app.get('/:id', async (req, res) => {
  let host = req.get('host');
  let name    = req.params.id;
  if(await isOnline(name)){
    let check       = await checkStreamKey(name, req.query.key);

    // Ensure the user has the stream key
    if(check){
      // Check if the user wants mobile/WSS
      if(req.query.method == 'wss'){
        res.render('wss', { name, port: config.rtmp.port, host, domain: host.split(':')[0] });
      } else {
        res.render('rtmp', { name, auth: req.query.key, port: config.rtmp.port, domain: host.split(':')[0]});
      }
    } else {
      res.render('auth', { name, query: req.query.key })
    }


  } else {
    res.render('offline', { name })
  }

});





app.listen(config.isp.webport, () => console.log('Express listening on port '+config.isp.webport));
