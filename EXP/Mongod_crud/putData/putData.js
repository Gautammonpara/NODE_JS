const express = require('express');
const putData = express.Router();


const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.ajb714p.mongodb.net/?retryWrites=true&w=majority';
// const url="mongodb://localhost:27017";



putData.put('/', (req, res) => {
    // res.json({ msg: 'Authorized user inside put' });

    mongoClient.connect(url, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db('check_db');
            db.collection('newtitle').updateOne(
                {title:req.body.title},
                {$set:{isbn:req.body.isbn}},
                (err, arr) => {
                console.log(arr);
            });
        }

    });
});


module.exports = putData;