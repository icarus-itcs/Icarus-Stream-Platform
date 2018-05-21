# 🎥 Icarus Stream Platform (ISP)
Icarus Stream Platform (ISP) is a node-based RTMP light weight streaming portal. Built for small communities to share low to near zero latency streams together! Password protected streams are optional. There is zero maintence to get started, no databases, advanced authentication, etc. Use your favorite streaming tool such as OBS and get a stream up and running now!



## 🗃️ Features
* Instant "on-the-go" streaming
* No database setups
* Password Protection using Stream keys
* RTMP & Websocket for ultra-low-latency and mobile support
* Simple yet intuitive UI/UX
* No maintenance 
* Infinite Horizontal Scaling
* Help section for the uninitiated on the homepage




## 💾 Installation

**🖥️ Requirements**
* Node v8+

**📜 Manual Install**
1. `git clone https://github.com/miles-collier/Icarus-Stream-Platform.git`
2. `cd Icarus-Stream-Platform`
3. `npm install`
4. `npm start`
5. Go to `http://localhost:4700/`

**🐳 Docker Install**
1. `sudo docker pull icarus1/icarus-stream-platform`
2. `sudo docker run -p 4700:4700 -p 1935:1935 -p 8000:8000 -d icarus1/icarus-stream-platform`
3. Go to `http://localhost:4700`

(Optional) Custom configuration file: `sudo docker run -d -v /path/to/config.json:/usr/src/app/config.json:rw -p 4700:4700 -p 1935:1935 -p 8000:8000 -d icarus1/icarus-stream-platform`

**Used Ports**
* 4700: Web
* 8000: API
* 1935: RTMP


## Example Configuration
```
{
 "isp": {
   "webport": 4700,
   "title": "Icarus Stream Platform",
   "motto": "Created by Miles Collier (Icarus), https://github.com/miles-collier/Icarus-Stream-Platform"
 },
 "rtmp": {
   "port": 1935,
   "chunk_size": 4096,
   "gop_cache": false,
   "ping": 60,
   "ping_timeout": 30
 },
 "http": {
   "port": 8000,
   "allow_origin": "*"
 },
 "apiAuth": {
   "access": true,
   "apiKey": ""
 }
}
```





## License

*Open source license*

If you are creating an open source application under a license compatible with the GNU GPL license v3, you may use Icarus Stream Platform (ISP) under the terms of the GPLv3. You can read more about this license [here](https://www.gnu.org/licenses/quick-guide-gplv3.en.html).
