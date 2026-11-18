
 // Menampilkan angka genap dan ganjil 1-100

let jumlahGenap = 0;

console.log("=== ANGKA GENAP ===");

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        jumlahGenap += i;
    }
}

console.log("=== ANGKA GANJIL ===");

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("Jumlah seluruh angka genap:", jumlahGenap);
