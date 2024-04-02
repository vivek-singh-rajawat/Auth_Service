const express = require('express');

const {PORT} = require('./config/serverConfigs');

const app = express();

const prepareAndStartServer = () => {
    app.listen(3001, () => {
        console.log(`server Started on port: ${PORT}`);
    })
}

prepareAndStartServer();