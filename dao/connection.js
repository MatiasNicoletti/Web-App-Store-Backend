const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

exports.connect = () => {
  const databaseLink = process.env.DATA_BASE_LOCAL;
  mongoose
    .connect(databaseLink, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false ,
      useUnifiedTopology: true
    })
    .then(() => console.log('DB connection successful!')).catch(error => {
        console.log('Connection to DB has failed'); 
    });

}
