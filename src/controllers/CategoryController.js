import Category from '../models/Category';

class CategoryController {
  //listar todas as categorias
  async index(req, res) {
    const categories = await Category.find({});

    return res.json(categories);
  }

  //criar uma nova  categoria
  async store(req, res) {
    const { name } = req.body;
    const categoryExists = await Category.findOne({ name });

    if (categoryExists) {
      return res.status(400).json({ error: 'essa categoria já existe ' });
    }
    const category = await Category.create({
      name,
    });
    return res.json(category);
  }
  // atualizar a categoria
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(400).json({ error: 'Category does not found' });
    }

    // prettier-ignore
    if (!name &&(name !==category.name)) {
      const categoryExists = await Category.findOne({ name });
      if(categoryExists) {
        return res.status(400).json({ error: 'essa categoria já existe'});
      }
    }

    category.name = name;
    await category.save();
    res.json(category);
  }

  async delete(req, res) {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(400).json({ error: 'Category does not found' });
    }
    await category.delete();

    return res.status(204).send('ddddd');
  }
}
export default new CategoryController();
