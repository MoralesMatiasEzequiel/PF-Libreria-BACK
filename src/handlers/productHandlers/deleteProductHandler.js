const deleteProductCtrl = require('../../controllers/productCtrls/deleteProductCtrl')

const deleteProductHandler = async (req, res) => {
    const { _id } = req.params;

    try {
        const deleted = await deleteProductCtrl(_id);

        res.status(200).send(`Product has been deleted`);

    } catch (error) {
       return res.status(500).json({ description: `There's no product with ID: ${_id}` });
    }
};

module.exports = deleteProductHandler;