const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/Confecciones"
const connectDatabase = () => {
  
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      })
  };
module.exports = connectDatabase