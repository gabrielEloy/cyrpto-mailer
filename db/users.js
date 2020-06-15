const mongoose = require('mongoose');

const databaseURI = "mongodb+srv://geloy:58132134@cluster0.h645f.mongodb.net/crypto_mailer?retryWrites=true&w=majority";

class Database {
  constructor(){
    this._connect()
  }

  _connect(){
      mongoose.connect(databaseURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
          console.log('Database  successfully connected');
        })
        .catch(err => {
          console.log('Database connection error')
          console.log(err)
        })
  }
}

module.exports = new Database();