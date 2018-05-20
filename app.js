const NMS     = require('node-media-server');
const express = require('express');
const app     = express();
const path    = require('path');
const request = require('request-promise');


/* Application Configuration */

const domain = 'example.com';
const webport = 6969;
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 4096,
    gop_cache: false,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
  apiAuth: {
    access: true,
    secret: 'example' // ADD A SECRET API KEY FOR INTERNAL USE - REQUIRED, DO NOT USE DEFAULT
  }
};


/* ********************************************* */
/* Only edit below if you know what you're doing */
/* ********************************************* */






// Start media server
var nms = new NMS(config);
nms.run();


// Add static assets and engine for routing/templates
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


// Grab the stream data (users, apps, etc)
async function getApi(){
  return request('http://' + domain + ':' + config.http.port + '/api/streams?apiKey='+config.apiAuth.secret);
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
  let api = await getApi();
  let json = await JSON.parse(api);
  res.render('home', { api: json, domain });
});

app.get('/:id', async (req, res) => {

  let name    = req.params.id;
  if(await isOnline(name)){
    let check       = await checkStreamKey(name, req.query.key);

    // Ensure the user has the stream key
    if(check){
      // Check if the user wants mobile/WSS
      if(req.query.method == 'wss'){
        res.render('wss', { name, domain, port: config.rtmp.port });
      } else {
        res.render('rtmp', { name, auth: req.query.key, domain, port: config.rtmp.port});
      }
    } else {
      res.render('auth', { name, query: req.query.key })
    }


  } else {
    res.render('offline', { name })
  }

});





app.listen(webport, () => console.log('Express listening on port '+webport));
