const express = require('express');

const app = express();

/**
 * Import MongoClient & connexion à la DB
 */
 const MongoClient = require('mongodb').MongoClient;
 const url = 'mongodb://127.0.0.1:27017';
 const dbName = 'shifumi';
 let db
  

 module.exports = function connection(){
    MongoClient.connect(url, function(err, client) {
      db = client.db(dbName);
    
      console.log("Connected successfully to server");
    });
    return db
}
app.use(express.json())

