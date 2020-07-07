import mongoose from 'mongoose';
require('dotenv').config();

//conexao com banco de dados

class Database {
  constructor() {
    this.init();
  }
  init() {
    mongoose.connect(
      process.env.MONGO_URI,
      //'mongodb://localhost:27017/my-api',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log('MongoDB conectando ')
    );
  }
}

export default new Database();
