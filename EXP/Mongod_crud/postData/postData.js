const express = require('express');
const postData = express.Router();


const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.ajb714p.mongodb.net/?retryWrites=true&w=majority';
// const url="mongodb://localhost:27017";


postData.post('/', (req, res) => {
    res.json({ msg: 'Authorized user inside post' });

    mongoClient.connect(url, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db('check_db');
            db.collection('newtitle').insertOne({
                "title":req.body.title,
                "isbn":req.body.isbn
            },(err, arr) => {
                console.log(arr);
            });
        }
    });
});


module.exports = postData;