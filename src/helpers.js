const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => {
    if(parseInt(qty)-1 == 0){
        return 1;
    }else{
        return parseInt(qty) - 1;
    }
};
const subTotal = (price, qty) => price * qty;

module.exports = { 
    incrementQty, 
    decrementQty,
    subTotal
};
