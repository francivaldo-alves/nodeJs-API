import { Schema, model } from 'mongoose';
//criando o modelo de produtos
const ProductShema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
});

export default model('Product', ProductShema);
