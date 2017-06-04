// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidV4 = require('uuid/v4');
uuidV4();

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let counter = 0;

wss.on('connection', function connection(ws) {
  counter++;

  wss.clients.forEach(function count(client) {
    client.send(counter);

  })
  ws.on('message', function incoming(message) {
    //console.log("IS IT STRING:", message);
    let mess = JSON.parse(message);
    mess["id"] = uuidV4();
    delete mess.type;
    mess["type"] = "incomingMessage";
    const colorArray = ['darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink'];
    const random = colorArray[Math.floor(Math.random() * colorArray.length)];
    wss.clients.forEach(function (client) {
      console.log('RANDOM:', random);
    })

    console.log("IS IT THE INCOMING MESSAGE ", mess )
      // Broadcast to all.
      wss.clients.forEach(function each(client) {
        if(mess.currentuser !== mess.username) {
            mess.notification = mess.currentuser + ' has changed its name to ' + mess.username;
        }
        console.log("IS IT A MESS ", mess)
        client.send(JSON.stringify(mess));

       });

    })
    // }

    ws.on('close', () => {
      counter--
      wss.clients.forEach(function (client) {
        client.send(counter);
      })

      console.log('Client disconnected')
    });
  });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
