import mongoose from 'mongoose';
//conexao com banco de dados
class Database {
  constructor() {
    this.init();
  }
  init() {
    mongoose.connect(
      'mongodb://localhost:27017/my-api',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log('MongoDB conectando ')
    );
  }
}

export default new Database();
