const { incrementQty, decrementQty, subTotal } = require('../helpers');
/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const helper = require('../helpers');

// test  increment qty
test('Jika Qty 1 ditambah 2 hasilnya 3',()=>{
    expect(incrementQty(2)).toBe(3);
});

// test decrement qty
test('Jika Qty 1 dikurangi 1 hasilnya 0',()=>{
    expect(decrementQty(1)).toBe(0);
});

// test subtotal
test('Subtotal dikali qty 3 hasilnya 150000',()=>{
    expect(subTotal(50000,3)).toBe(150000);
});

