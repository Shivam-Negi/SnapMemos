const express = require('express');
const router = require('./routes');
const { serverConfig, database } = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api', router);

app.listen(serverConfig.PORT, async () => {
    console.log(`server listening on port :  ${serverConfig.PORT}`);
    database.connect();
    console.log('mongoose connected');
})