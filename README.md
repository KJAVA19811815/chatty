React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```

-Manually update your package.json file
```

Install the dependencies and start the server.
-The chatty server is server.js(npm start) and the server file is server2.js(node server2.js)

- To start the project go to the server2.js file and run command "node server2.js" to start the server

- To start the chatty server use the command "npm start" it starts the chatty server file "server.js"


```
npm install
npm start
open http://localhost:3000
```
### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/
webpack-dev-server)
* node-uuid: 1.4.8(version), this is for the 128 bit random number
