
 // Menghitung total belanja
const harga = 25000;
const jumlah = 4;

// Menghitung total sebelum diskon
const total = harga * jumlah;

// Menghitung diskon 10%
const diskon = total * 10 / 100;

// Menghitung pembayaran
const pembayaran = total - diskon;

// Menampilkan hasil
console.log("Total sebelum diskon:", total);
console.log("Besaran diskon:", diskon);
console.log("Total pembayaran:", pembayaran);
