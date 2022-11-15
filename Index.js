const express = require('express')
const mongoose = require('mongoose')
const Cors = require('cors')
const app = express();
const User = require('./routes/UserData')
const addTopics = require('./routes/addTopics')
const getColorCode = require('./routes/createColorCode')
require('events').EventEmitter.prototype._maxListeners = 100;
mongoose.connect("mongodb+srv://RavisDatabase:ravisproperty@mycluster.cc3f0ru.mongodb.net/test")
.then(() => console.log("Congrulations your are connected to database..."))
.catch(err => console.log(err))

app.use(express.json())

app.use(Cors({
    origin:"*",
    credentials:true,
    optionsSuccessStatus:200
}))

app.use('/myproject/', User, addTopics, getColorCode)

app.listen(process.env.PORT || 5000, () => 
{
  console.log('Backend Server is running');
})