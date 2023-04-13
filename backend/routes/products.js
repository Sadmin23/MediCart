const express = require("express")
const router = express.Router();

const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct, 
    createProductReview,
    getProductReviews
} = require("../controllers/productControllers");

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route("/products").get(getProducts);

router.route("/product/:id").get(getSingleProduct);

router.route("/admin/product/new").post(isAuthenticatedUser,  authorizeRoles('admin'), newProduct);

router.route("/admin/product/:id")
                .put(isAuthenticatedUser, updateProduct)
                .delete(isAuthenticatedUser, deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews)


module.exports = router;