const createProduct = require('../../controllers/productCtrls/postProductCtrl');

const postProductHandler = async (req, res) => {

    const { name, brand, stock, price, salePrice, image, description, rating } = req.body;

    try {
        
        if(!name || !brand || !stock || !price || !image){
            return res.status(400).send({ error: 'Missing data' });
        }

        const newProduct = await createProduct(name, brand, stock, price, salePrice, image, description, rating);

        res.status(200).json(newProduct);

    } catch (error) {
        
        if(error.message) res.status(400).send(error);
        res.status(500).send(error.message);

    }
};

module.exports = postProductHandler;