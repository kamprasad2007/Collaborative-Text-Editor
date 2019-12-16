// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const https = require('https');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use('/node_modules', express.static('node_modules'));
app.use('/ot.js', express.static('ot.js'));

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.render("index", { title: "Login" });
});

app.get("/page", (req, res) => {
    var id = req.query.id;
    var token = req.query.token;
    if(!id && !token){
        res.redirect('/');
    }else{
        //validate token
        const options = {
            hostname: 'oauth2.googleapis.com',
            port: 443,
            path: '/tokeninfo?id_token=' + token,
            method: 'GET'
        }

        const httpreq = https.request(options, httpres => {
            httpres.setEncoding('utf8');
            httpres.on('data', data => {
                var jsonData = JSON.parse(data);
                if(jsonData.error){
                    res.redirect('/');
                }else{
                    res.render("page", { title: jsonData.sub, userProfile: { name : jsonData.name, picture : jsonData.picture } });
                }
            });
          });

        httpreq.on('error', error => {
            res.redirect('/');
        })

        httpreq.end()
    }
});

/**
 * Server Activation
 */
http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

var EditorSocketIOServer = require('./ot.js/editor-socketio-server.js');
var server = new EditorSocketIOServer("", [], 1);

io.on('connection', function(socket) {
    console.log('ttttttt');
    server.addClient(socket);
});