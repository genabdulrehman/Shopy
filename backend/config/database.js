const mongoose = require("mongoose")


const connectDatabase = () => {


  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
    console.log(`MongoDB Connected with server : ${data.connection.host}`)
  }).catch((error) => {
    console.log(`The Error while connecting mongodb : ${error}`)
  })

}


module.exports = connectDatabase
