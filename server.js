const dotenv = require('dotenv')
const cors = require('cors')
const express = require('express')
const connectDB = require('./db/conn')
const userRoutes = require('./routes/userRoutes')
const notesRoutes = require('./routes/notesRoutes')
const path = require('path')

const app = express()
dotenv.config({path: './config.env'});
connectDB();
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/api/users', userRoutes)
app.use('/api/notes', notesRoutes)

app.use(express.static(path.join(__dirname, './notesfrontend/build')))

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './notesfrontend/build/index.html'));
})

 const PORT = process.env.PORT || 3000;


app.listen(PORT,
    console.log(`connection is successfully created ${PORT}`)
    )