const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => {
    if(parseInt(qty) - 1 == 0){
        return 1;
    }else{
        return parseInt(qty) - 1;
    }
};
const subTotal = (price, qty) => price * qty;
const hitungDiskon = (price,qty,code) => {
    const Total = subTotal(price,qty);
    if(code){
        diskon = Total * 0.10;
        return diskon;
    }else{
        return diskon = 0;
    }
    return diskon;
}
const jmlHarga = (price , qty , code) => {
    return subTotal(price , qty) - hitungDiskon(price , qty , code);
}
module.exports = { 
    incrementQty, 
    decrementQty,
    subTotal,
    hitungDiskon,
    jmlHarga,
};
