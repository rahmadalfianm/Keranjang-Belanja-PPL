const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;
const subTotal = (price, qty) => price * qty;

module.exports = { 
    incrementQty, 
    decrementQty,
    subTotal
};
