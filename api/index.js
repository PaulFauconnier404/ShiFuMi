
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;

const dbConn = require("./database/conn");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// //DATABASE CONNECTION
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'shifumi';
// let db
 
// MongoClient.connect(url, function(err, client) {
//   db = client.db(dbName);
//   console.log("Connected successfully to server");
// });


app.use(express.json())


app.listen(port, () => console.log(`Listening on port ${port}`));
