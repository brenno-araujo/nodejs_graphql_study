module.exports = {
    priceWithDiscount: (product) => {
        if (product.discount) {
            return product.price - product.discount
        } else {
            return product.price
        }
    }
}