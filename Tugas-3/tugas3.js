// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

// Jawaban Soal 1 : 

	//Mengkapitalkan S
	var capitalin = kataKedua.charAt(0)
	var S = capitalin.toUpperCase()
	// console.log(S)

	//Menampilkan enang
	var enang = kataKedua.substr(1,5)
	// console.log(enang)

	//Menggabungkan Senang
	var Senang = S.concat(enang)
	//console.log(Senang)


	//Menakpitalkan seluruh kataKeempat
	var upper4 = kataKeempat.toUpperCase()
	//console.log(upper4);

	//menambahkan spasi
	var spasi = " ";
	//Mengabungkan seluruh kata
	var a = kataPertama.concat(spasi)
	var b = a.concat(Senang)
	var c = b.concat(spasi)
	var d = c.concat(kataKetiga)
	var e = d.concat(spasi)
	var f = e.concat(upper4)
	
	//Hasil
	console.log(f);

// Soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

// Jawaban Soal 2

	//String to Integer

	var satu = Number(kataPertama);
	var dua = Number(kataKedua);
	var tiga = Number(kataKetiga);
	var empat = Number(kataKeempat);
	
	//Hasil Penjumlahan
	var a = satu + dua + tiga + empat
	console.log(a);

// Soal 3

var kalimat = 'wah javascript itu keren sekali'; 
console.log(kalimat.length);

// Jawaban Soal 3
var kataPertama = kalimat.substring(0, 3); 
	var kataKedua = kalimat.substring(4,14); // do your own! 
	var kataKetiga = kalimat.substring(15,18); // do your own! 
	var kataKeempat = kalimat.substring(19,24); // do your own! 
	var kataKelima = kalimat.substr(25); // do your own! 

	console.log('Kata Pertama: ' + kataPertama); 
	console.log('Kata Kedua: ' + kataKedua); 
	console.log('Kata Ketiga: ' + kataKetiga); 
	console.log('Kata Keempat: ' + kataKeempat); 
	console.log('Kata Kelima: ' + kataKelima);

// Soal 4

		// nilai >= 80 indeksnya A
		// nilai >= 70 dan nilai < 80 indeksnya B
		// nilai >= 60 dan nilai < 70 indeksnya c
		// nilai >= 50 dan nilai < 60 indeksnya D
		// nilai < 50 indeksnya E

//Jawaban Soal 4

var nilai = 67 ;
console.log("Nilai yang di cek : "+ nilai)

		if (nilai >= 80) { //100-80
			console.log("Indeks : A")
		}else if (nilai >= 70) { //79-70
			console.log("Indeks : B")
		}else if (nilai >= 60 ) { //69-60
			console.log("Indeks : C")
		}else if (nilai >= 50 ) { //59 - 50
			console.log("Indeks : D")
		}else { 	
			console.log("Indeks : E") //49-0
		}


//Soal 5


var tanggal = 14;
var bulan = 9;
var tahun = 1996;

// Jawaban Soal 5
console.log(tanggal);
switch(bulan){
	case  1: {console.log("Januari"); break;}
	case  2: {console.log("Februari"); break;}
	case  3: {console.log("Maret"); break;}
	case  4: {console.log("April"); break;}
	case  5: {console.log("Mei"); break;}
	case  6: {console.log("Juni"); break;}
	case  7: {console.log("Juli"); break;}
	case  8: {console.log("Agustus"); break;}
	case  9: {console.log("September"); break;}
	case  10: {console.log("oktober"); break;}
	case  11: {console.log("November"); break;}
	case  11: {console.log("Desember"); break;}
	default: {console.log("Bulan tidak ditemukan");}
}
console.log(tahun);
//Menampilkan tgl lahir


