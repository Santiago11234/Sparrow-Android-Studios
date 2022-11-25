const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log("Listening on port 3000");
})


/* 
const mongoClient = require('mongodb').MongoClient

async function main() {
	// we'll add code here soon
    const ur = "mongodb+srv://Sparrow:jennaIsANerd@cluster0.3nk3kqq.mongodb.net/test";
    const client = new MongoClient(uri);
}

/*

const url = "mongodb://localhost:27017"

mongoClient.connect(url, (err, db) => {

    if (err) {
        console.log("Error while connecting mongo client")
    } else {

        const myDb = db.db('myDb')
        const collection = myDb.collection('myTable')

        app.post('/signup', (req, res) => {

            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const query = { email: newUser.email }

            collection.findOne(query, (err, result) => {

                if (result == null) {
                    collection.insertOne(newUser, (err, result) => {
                        res.status(200).send()
                    })
                } else {
                    res.status(400).send()
                }

            })

        })

        app.post('/login', (req, res) => {

            const query = {
                email: req.body.email, 
                password: req.body.password
            }

            collection.findOne(query, (err, result) => {

                if (result != null) {

                    const objToSend = {
                        name: result.name,
                        email: result.email
                    }

                    res.status(200).send(JSON.stringify(objToSend))

                } else {
                    res.status(404).send()
                }

            })

        })

    }

})



app.listen(3000, () => {
    console.log("Listening on port 3000...")
})

*/