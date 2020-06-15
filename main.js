const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/users');

const mongoose = require('mongoose');

const users = require('./routes/users')


const app = express();

app.use(bodyParser.json())
app.use('/users', users)

app.get('/', (req, res, next) => {
  db.connection.collection('users', (err, collection)=> {
    if(err){
      console.log(err)
    }

    console.log(collection)
  })
})

app.listen(7777);

// const { getCoinPrice } = require('./services')
// const sendMail = require('./services/email')


// const userModel = require('./schemas/users')

// const handleSendEmail = async () => {
//   // const {data} = await getCoinPrice();
  
//   // if(data.BRL < 1000){
    
//   // }
  
//   console.log(userModel)
// }

// handleSendEmail()
