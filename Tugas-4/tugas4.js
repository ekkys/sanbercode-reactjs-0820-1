//SOAL 1

console.log("<--- Soal 1 --->");
console.log("|| Looping Maju Mundur ||");
console.log("|| Genap - I will become a frontend developer ||");
console.log("|| Deret 2 - I love coding||");

// JAWABAN SOAL 1

console.log(" ");
console.log("<--- Jawaban Soal 1 --->");
console.log(" ");
console.log("LOOPING PERTAMA");
console.log(" ");


var deretLove = 0;
var jumlahLove = 20;
while(jumlahLove > 0){
	deretLove +=2;
	console.log(deretLove+" - I love coding");
	jumlahLove -= 2;
}

console.log(" ");
console.log("LOOPING KEDUA");
console.log(" ");

var deretDev = 20;
while(deretDev > 0){
	console.log(deretDev+" - I will be come a frontend developer");
	deretDev -= 2;
}

console.log(" ");
console.log(" ");


//SOAL 2
console.log("<--- Soal 2 --->");
console.log("|| Ganjil == Santai ||");
console.log("|| Genap == Berkualitas ||");
console.log("|| Kelipatan 3 && ganjil == I Love Coding||");

// JAWABAN SOAL 2
console.log(" ");
console.log("<--- Jawaban Soal 2 --->");
console.log(" ");

for (var angka = 1; angka <= 20; angka++) {
	if (angka%2 == 1 && angka%3 == 0) {
		console.log(angka+" - I Love coding");
	}else if (angka%2 == 0) {
		console.log(angka+" - Berkualitas");
	}else if (angka%2 == 1) {
		console.log(angka+" - Santai");
	}
	
}
console.log(" ");

//SOAL 3
console.log("<--- Soal 3 --->");
console.log("||Segitiga Siku 7 x 7||");
// #
// ##
// ###
// ####
// #####
// ######
// #######

// JAWABAN SOAL 3
console.log(" ");
console.log("<--- Jawaban Soal 3 --->");
console.log(" ");

console.log("Komibinasi Switch")
var angka = 0;
var deret = 7;

for (var i = 0; i <= 7; i++) {
	while(deret > 0){
		angka++;
		switch(angka){
			case 1: {console.log("#"); break;}
			case 2: {console.log("##"); break;}
			case 3: {console.log("###"); break;}
			case 4: {console.log("####"); break;}
			case 5: {console.log("#####"); break;}
			case 6: {console.log("######"); break;}
			case 7: {console.log("#######"); break;}
			default : {console.log("-"); break;}
		}
		deret--;
	}
}

console.log(" ");
console.log("<--- Jawaban Soal 3 --->");
console.log(" ");
console.log("Memanfaatkan method repeat() ");

var pagarPerbaris = 0;
var jumlahPagar = 7;

while(pagarPerbaris <= jumlahPagar ){
	var segitiga= "#".repeat(pagarPerbaris); //menghasilkan 
	console.log(segitiga);
	pagarPerbaris++;
}


console.log(" ");

//SOAL 4
console.log("<--- Soal 4 --->");
console.log("| String to array|");

// JAWABAN SOAL 4
console.log("<--- Jawaban Soal 4 --->");
console.log(" ");
var kalimat="saya sangat senang belajar javascript";
var split = kalimat.split(" ", 5);
// var join = kalimat.join("-");
console.log(split);

// var index0 = kalimat.substr(0,4);
// var index1 = kalimat.substr(5,7);
// var index2 = kalimat.substr(12,7);
// var index3 = kalimat.substr(19,7);
// var index4 = kalimat.substr(27);
 
// var sentence =  kalimat.splice(0, index0, index1, index2, index3, index4);
// console.log(sentence);


// console.log(index0);
// console.log(index1);
// console.log(index2);
// console.log(index3);
// console.log(index4);

// SOAL 5
console.log(" ");
console.log("<--- Jawaban Soal 5 --->");
console.log("|Mengurutkan array|");
console.log(" ");

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

// JAWABAN SOAL 4
var show = daftarBuah.sort();

console.log(show[0]);
console.log(show[1]);
console.log(show[2]);
console.log(show[3]);
console.log(show[4]);
