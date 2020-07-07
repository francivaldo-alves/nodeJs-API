import { Schema, model } from 'mongoose';
//criando o modelo categoria
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default model('Category', CategorySchema);
