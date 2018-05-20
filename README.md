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

**📜 Process**
1. `git clone https://github.com/miles-collier/Icarus-Stream-Platform.git`
2. `cd icarus-stream-platform`
3. `npm install`
4. Open `app.js` in your preferred text editor
5. Edit `const domain = 'example.com'` to reflect your domain/IP.
6. Edit config > apiAuth > secret from `example` to a choosen secret password. ⚠️ Important ⚠️
7. (optional) Edit any other respective ports or settings.
8. Save changes
9. `npm start`
10. Go to `http://localhost:6969/`


## License

*Open source license*

If you are creating an open source application under a license compatible with the GNU GPL license v3, you may use Icarus Stream Platform (ISP) under the terms of the GPLv3. You can read more about this license [here](https://www.gnu.org/licenses/quick-guide-gplv3.en.html).
