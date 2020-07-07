import Product from '../models/Product';
import Category from '../models/Category';
class ProductController {
  //listar
  async index(req, res) {
    const products = await Product.find({}).populate('category');

    return res.json(products);
  }
  //cadastar
  async store(req, res) {
    const { name, description, price, category } = req.body;

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ error: 'Categoria não existe ' });
    }
    const productexists = await Product.findOne({ name });
    if (productexists) {
      return res.status(400).json({ error: 'esse produto já existe ' });
    }
    const product = await Product.create({
      name,
      description,
      price,
      category,
    });

    return res.json(product);
  }
  //atualizar
  async update(req, res) {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ error: 'Categoria não existe ' });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({ error: 'Product does not found' });
    }
    if (name && name !== product.name) {
      const productexists = await Product.findOne({ name });
      if (productexists) {
        return res.status(400).json({ error: 'esse produto já existe ' });
      }
    }

    (product.name = name),
      (product.description = description),
      (product.price = price),
      (product.category = category);

    await product.save();
    return res.json(product);
  }
  async delete(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(400).json({ error: 'Product does not found' });
    }
    await product.remove();
    return res.status(204).send();
  }
}

export default new ProductController();
