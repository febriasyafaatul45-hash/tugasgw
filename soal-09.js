
// Data mahasiswa
const mahasiswa = [
    { nama: "Andi", nilai: 85 },
    { nama: "Budi", nilai: 60 },
    { nama: "Citra", nilai: 90 },
    { nama: "Doni", nilai: 70 },
    { nama: "Eka", nilai: 95 }
];

// Menampilkan mahasiswa yang lulus
const lulus = mahasiswa.filter(m => m.nilai >= 75);

// Menampilkan mahasiswa yang tidak lulus
const tidakLulus = mahasiswa.filter(m => m.nilai < 75);

// Menghitung jumlah mahasiswa lulus
const jumlahLulus = lulus.length;

// Mengurutkan nilai dari tertinggi
const urutNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);

console.log("Mahasiswa yang lulus:", lulus);
console.log("Mahasiswa yang tidak lulus:", tidakLulus);
console.log("Jumlah mahasiswa lulus:", jumlahLulus);
console.log("Urutan nilai tertinggi:", urutNilai);
