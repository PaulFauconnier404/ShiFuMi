
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Récuperation de la forme de l'ID
function getId(idRequested){
    const isIntId = parseInt(idRequested);   
    var good_id = isIntId
   
    if(isIntId != idRequested){
      const ObjectId = require('mongodb').ObjectId; 
      const id = idRequested;       
  
      var good_id = new ObjectId(id);
    } 
  
    return good_id;
  }


//DATABASE CONNECTION
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'shifumi';
let db
 
MongoClient.connect(url, function(err, client) {
  db = client.db(dbName);
  console.log("Connected successfully to server");
});


app.use(express.json())

app.get('/api/user_data', (req,res) => {
    db.collection('user').find({}).toArray(function(err, docs) {
        if (err) {
            console.log(err)
            throw err
        }
        res.status(200).json(docs)
      }) 
  })
  app.get('/api/user_data/:id', async (req,res) => {
    const id = getId(req.params.id)
  
    try {
        const docs = await db.collection('user').findOne( {_id : id} )
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
  })
  
  app.get('/api/user_data/:pseudo', async (req,res) => {
    const pseudo = req.params.pseudo
    try {
  
        const docs = await db.collection('user').findOne( { 'pseudo' : pseudo.toString()} )
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
  })
  app.post('/api/user_data', async (req,res) => {
    try {
        const interconnexionData = req.body
        const interconnexion = await db.collection('user').insertOne(interconnexionData)
        res.status(200).json(interconnexion)
    } catch (err) {
        console.log(err)
        throw err
    }
    
  })
  app.put('/api/user_data/:id', async (req,res) => {
    try {
        const id = getId(req.params.id)
  
        const replacementInterconnexion = req.body
        const interconnexion = await db.collection('user').replaceOne( {_id : id} ,replacementInterconnexion)
        res.status(200).json(interconnexion)
    } catch (err) {
        console.log(err)
        throw err
    }
  })
  app.patch('/api/user_data/:id', async (req,res) => {
    try {
        const id = getId(req.params.id)
  
        const replacementInterconnexion = req.body
        const interconnexion = await db.collection('user').updateOne( {_id : id} , {$set: replacementInterconnexion}, {upsert:true})
        res.status(200).json(interconnexion)
    } catch (err) {
        console.log(err)
        throw err
    } 
  })
  app.delete('/api/user_data/:id', async (req,res) => {
    try {
        const id = getId(req.params.id)
  
        const interconnexion = await db.collection('user').deleteOne( {_id : id} )
        res.status(200).json(interconnexion)
    } catch (err) {
        console.log(err)
        throw err
    } 
  })
  

app.listen(port, () => console.log(`Listening on port ${port}`));
