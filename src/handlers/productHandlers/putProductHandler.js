const putProductCtrl = require('../../controllers/productCtrls/putProductCtrl');

const putProductHandler = async (req, res) => {
    const { _id, name, brand, stock, price, salePrice, image, description, active, subcategories } = req.body;
    try {
      if(!_id) res.status(400).json({ error: 'Missing ID' });

      if (
        (name && typeof name !== 'string') ||
        (brand && typeof brand !== 'string') ||
        (stock && typeof stock !== 'number') ||
        (price && typeof price !== 'number') ||
        (salePrice && typeof salePrice !== 'number') ||
        (image && typeof image !== 'string') ||
        (description && typeof description !== 'string') ||
        (active && typeof active !== 'boolean') ||
        (subcategories && !Array.isArray(subcategories))
    ){
        return res.status(400).send({ error: 'Incorrect DataType' });
      }
      
      const productUpdate = await putProductCtrl(_id, name, brand, stock, price, salePrice, image, description, active, subcategories)
    
      return res.status(200).send('Product had been updated');

    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = putProductHandler;