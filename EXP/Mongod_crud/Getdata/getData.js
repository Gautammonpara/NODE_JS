const express = require('express');
const getData = express.Router();


const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.ajb714p.mongodb.net/?retryWrites=true&w=majority';
// const url="mongodb://localhost:27017";


getData.get('/', (req, res) => {
    res.json({ msg: 'Authorized user inside get' });

    mongoClient.connect(url, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db('check_db');
            db.collection('newtitle').find().toArray((err, arr) => {
                console.log(arr);
            });
        }

    });
});

module.exports = getData;