const getProductsHandler = require('./getProductsHandler');
const getProductByIdHandler = require('./getProductByIdHandler');
const getProductsFilteredHandler = require('./getProductsFilteredHandler');
const getProductsSaleHandler = require('./getProductsSaleHandler');
const getProductsRatingHandler = require('./getProductsRatingHandler');
const postProductHandler = require('./postProductHandler');
const putProductHandler = require('./putProductHandler');
const deleteProductHandler = require('./deleteProductHandler');
const resetRatingHandler = require('./resetRatingHandler');
const putRatingProductHandler = require('./putRatingProductHandler');
const getProductsAllHandler = require('./getProductsAllHandler');
const getProductsFilteredAllHandler = require('./getProductsFilteredAllHandler');


module.exports = {
    getProductsHandler,
    getProductByIdHandler,
    getProductsFilteredHandler,
    getProductsSaleHandler,
    getProductsRatingHandler,
    postProductHandler,
    putProductHandler,
    deleteProductHandler,
    resetRatingHandler,
    putRatingProductHandler,
    getProductsAllHandler,
    getProductsFilteredAllHandler
}