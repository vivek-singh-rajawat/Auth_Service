const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverConfigs');
const apiRoutes = require('./routes/index');

// const UserService = require('./services/userServices');


const app = express();

const prepareAndStartServer = () => {

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);

    app.listen(PORT, async () => {
        console.log(`server Started on port: ${PORT}`);
        
        // const service = new UserService();
        // // const newToken = service.createToken({email: 'jatin@123gmail.com',id: 1});
        // // console.log('new token is', newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphdGluQDEyM2dtYWlsLmNvbSIsImlkIjoxLCJpYXQiOjE3MTI2NTg0NDIsImV4cCI6MTcxMjY1ODQ3Mn0.zfMq9W6F928rt7eOtqrUpGpJaeVrHEE-WYHd8Qfi_Mc';
        // const response = service.verifyToken(token);
        // console.log(response);
    })
}

prepareAndStartServer();