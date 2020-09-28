import { 
  incrementQty, 
  decrementQty,
  subTotal,
  jmlHarga,
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const txtsubtotal = document.querySelector('#subtotal');
const priceInput = document.querySelector('#price');
const diskonKodeInput = document.querySelector("#code");
const confirmButton = document.querySelector("#confirmButton");

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  txtsubtotal.textContent = `Rp. ${jmlHarga(priceInput.value, qtyInput.value, diskonKodeInput.value)}`
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  txtsubtotal.textContent = `Rp. ${jmlHarga(priceInput.value, qtyInput.value, diskonKodeInput.value)}`
});

confirmButton.addEventListener('click', () => {
  txtsubtotal.textContent = `Rp. ${jmlHarga(priceInput.value, qtyInput.value, diskonKodeInput.value)}`
});

priceInput.addEventListener('keyup', () => {
  txtsubtotal.textContent = `Rp. ${jmlHarga(priceInput.value, qtyInput.value, diskonKodeInput.value)}`
});

qtyInput.addEventListener('keyup', () => {
  txtsubtotal.textContent = `Rp. ${jmlHarga(priceInput.value, qtyInput.value, diskonKodeInput.value)}`
});

diskonKode.addEventListener('keyup', () => {
  txtsubtotal.textContent = `Rp. ${jmlHarga(priceInput.value, qtyInput.value, diskonKodeInput.value)}`
});