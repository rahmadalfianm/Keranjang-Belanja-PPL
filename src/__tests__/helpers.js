const { incrementQty, decrementQty, subTotal, hitungDiskon, jmlHarga } = require('../helpers');
/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const helper = require('../helpers');

// test  increment qty
test('Jika Qty 1 ditambah 2 hasilnya 3',() => {
    expect(incrementQty(2)).toBe(3);
});

// test decrement qty
test('Jika Qty 2 dikurangi 1 hasilnya 1',() => {
    expect(decrementQty(2)).toBe(1);
});

// test subtotal
test('Subtotal dikali qty 3 hasilnya 150000',() => {
    expect(subTotal(50000,3)).toBe(150000);
});

// test diskon
test('Diskon dengan Kode Promo bebas dari barang dengan harga 50000 dengan qty 2 adalah 10000',() => {
    expect(hitungDiskon(50000,2,"KODE")).toBe(10000);
});

// test Jumlah Harga
test('Jumlah harga barang dengan harga 50000 qty 2 dan diskon adalah 90000',() => {
    expect(jmlHarga(50000,2,"KODE")).toBe(90000);
});
// test jumlah harga tanpa kode promo
test('Jumlah harga barang dengan harga 50000 qty 2 dan Tanpa Kode Promo adalah 100000',() => {
    expect(jmlHarga(50000,2,"")).toBe(100000);
});