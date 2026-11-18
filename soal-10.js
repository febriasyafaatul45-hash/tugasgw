
// Data produk
const produk = [
    { nama: "Mouse", harga: 50000 },
    { nama: "Keyboard", harga: 100000 },
    { nama: "Monitor", harga: 1500000 },
    { nama: "Headset", harga: 200000 }
];

// Data pembelian
const pembelian = [
    { nama: "Mouse", jumlah: 2 },
    { nama: "Keyboard", jumlah: 1 },
    { nama: "Headset", jumlah: 1 }
];

let total = 0;

console.log("========= STRUK PEMBELIAN =========");

// Menghitung subtotal setiap produk
pembelian.forEach(item => {
    const barang = produk.find(p => p.nama === item.nama);
    const subtotal = barang.harga * item.jumlah;

    total += subtotal;

    console.log(
        barang.nama,
        "x" + item.jumlah,
        "Rp" + subtotal.toLocaleString("id-ID")
    );
});

// Menghitung diskon
const diskon = total > 500000 ? total * 10 / 100 : 0;

// Menghitung total pembayaran
const pembayaran = total - diskon;

// Menampilkan struk
console.log("-----------------------------------");
console.log("Subtotal: Rp" + total.toLocaleString("id-ID"));
console.log("Diskon: Rp" + diskon.toLocaleString("id-ID"));
console.log("Total pembayaran: Rp" + pembayaran.toLocaleString("id-ID"));
console.log("===================================");
console.log("Terima kasih!");
