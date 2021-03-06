const app = require('./app');
const dotenv = require('dotenv');
const connection = require('./dao/connection');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3050; //heroku won't work with out .env.port
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

connection.connect();


process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION! App shutting down');
    console.log(err.name, err.message);
    server.close(() => { 
      process.exit(1);
    });
  });