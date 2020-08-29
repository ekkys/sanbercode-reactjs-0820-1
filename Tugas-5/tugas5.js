// SOAL 1
console.log("****************************\n");
console.log("---- Soal - 1 -----\n");
console.log("|Function return “Halo Sanbers!”|\n");

// JAWABAN 1
console.log("---- Jawaban Soal 1-----\n");


function halo() {
	return "Halo Sanbers!";
}
console.log(halo());

console.log("\n****************************\n");

// SOAL 2
console.log("---- Soal - 2 -----\n");
console.log("|Function Perkalian dua angka|\n");

// JAWABAN 2
console.log("---- Jawaban Soal 2 -----\n");

function kalikan(num1, num2) {
	return num1 * num2;
}
var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(num1+" x "+num2+" = "+hasilKali);

console.log("\n****************************\n");

// SOAL 3
console.log("---- Soal - 3 -----\n");
console.log("|Introduce Function|\n");



// JAWABAN 3
console.log("---- Jawaban Soal 3 -----\n");

function introduce(name, age, address, hobby) {
	return "Nama saya "+name+", umur saya"+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!";	
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
console.log("\n****************************\n");




// SOAL 4
console.log("---- Soal - 4 -----\n");
console.log("|Membuat Object|\n");

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]


// JAWABAN 4
console.log("---- Jawaban Soal 4 -----\n");

var arrayDaftarPeserta = {
	nama : "Asep",
	"jenis kelamin" : "laki-laki",
	hobi : "baca buku",
	"tahun lahir" : 1992
}

console.log(arrayDaftarPeserta);
console.log("\n****************************\n");



// SOAL 5
console.log("---- Soal - 5 -----\n");
console.log("|Membuat Object dari data-data buah|\n");




// JAWABAN 5
console.log("---- Jawaban Soal 5 -----\n");

var arrayBuah = [ 
	{nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000}, 
	{nama: "jeruk",warna: "oranye", "ada bijinya": "ada", harga: 8000},
	{nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000},
	{nama: "Pisang", warna: "Kuning","ada bijinya": "tidak", harga: 5000}
]

console.log(arrayBuah[0]);
console.log("\n****************************\n");


// SOAL 6
console.log("---- Soal - 6 -----\n");
console.log("|Menambahkan Object baru|\n");

var dataFilm = [];


// JAWABAN 6
console.log("---- Jawaban Soal 6 -----\n");

function tambahFilm(nama, durasi, genre, tahun ){
	console.log(dataFilm.map(function(item){
		return item.nama
	}))
}

var nama = "Dum Laga Ke Haisha";
var durasi = "1 jam 50 menit 21 Detik";
var genre = "Komedi Romantis";
var tahun = 2015;

tambahFilm(nama, durasi, genre, tahun);




console.log("\n****************************\n");