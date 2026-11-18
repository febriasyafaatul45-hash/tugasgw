
// Data nilai mahasiswa
const nilai = [80, 75, 90, 65, 85, 95, 70];

// Menampilkan seluruh nilai
console.log("Seluruh nilai:", nilai);

// Mencari nilai tertinggi
const tertinggi = Math.max(...nilai);

// Mencari nilai terendah
const terendah = Math.min(...nilai);

// Menghitung rata-rata
const total = nilai.reduce((jumlah, angka) => jumlah + angka, 0);
const rataRata = total / nilai.length;

// Menghitung jumlah mahasiswa yang lulus
const lulus = nilai.filter(angka => angka >= 75);

console.log("Nilai tertinggi:", tertinggi);
console.log("Nilai terendah:", terendah);
console.log("Rata-rata:", rataRata);
console.log("Jumlah mahasiswa lulus:", lulus.length);
