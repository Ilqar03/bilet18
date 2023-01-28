const express = require('express')
const app = express()
const port = 3010
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

app.use(cors())
app.use(express.json())

const biletSchema = new mongoose.Schema({
    categories: String,
    price: Number,
    tutorial: String,
    name: String,
    description: String,
});

const Bilet = mongoose.model('Mybilet', biletSchema);

app.get('/', (req, res) => {
    Bilet.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.send("get sogusu alinmadi")
        }
    })
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    Bilet.findById(id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            res.send("id get sogusu alinmadi")
        }
    })
})

app.post('/', (req, res) => {
    const newbilet = new Bilet({
        categories: req.body.categories,
        price: req.body.price,
        tutorial: req.body.tutorial,
        name: req.body.name,
        description: req.body.description,
    });
    newbilet.save()
    res.send(newbilet)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    Bilet.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            res.send("delete sogusu alinmadi")
        }
    })
})


mongoose.connect(process.env.USER)
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
