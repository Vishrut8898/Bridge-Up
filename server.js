const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5055

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

// mongoose
mongoose.connect('mongodb+srv://mern:mern@cluster0.1wha3.mongodb.net/BridgeUp?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    .then(() => console.log('Database Connected'))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use('/', require('./routes/index'))

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})