// Function
// Sebuah sub-program / sub-routine yang dapat dipanggil dibagian lain pada program 
// Merupakan struktur dasar pembentuk dari javascript
// Disebut juga sebagai prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
// Untuk dapat menggunakannya, kita harus membuat terlebih dahulu function tsb, lalu memanggilnya
// termasuk kedalam First-Class Object
// Kategori function
// Built-In Function (Function bawaan dari javascript) & User-Defined Function (Function yang sudah kita buat sendiri)
// Built-In Function
// https://www.w3schools.com/jsref/jsref_obj_string.asp (String)
// https://www.w3schools.com/jsref/jsref_obj_math.asp (Math)
// User-Defined Function
// Fungsi yang kita buat sendiri
// Menggunakan keyword function
// Nama function (optional)
// Parameter / Argument
// disimpan di dalam ()
// boleh ada atau tidak, jika ada boleh lebih dari satu
// dipisahkan oleh koma jika lebih dari satu
// Function body, dibungkus dengan {}
// Dapat mengembalikan nilai (return value) atau tidak
// Return digunakan untuk memberitahu intpreter bahwa kita telah selesai mengerjakan sesuatu dan inilah hasilnya 
// Cara membuat User-Defined Function ada 2
// Deklarasi (Function Declaration)
// Ekspresi (Function Expression)

// Contoh Function Declaration (Deklarasi)
// function menghitungJumlahEmpatKubus(a, b, c, d) {
// 	let total, volumeA, volumeB, volumeC, volumeD;

// 	volumeA = a * a * a;
// 	volumeB = b * b * b;
// 	volumeC = c * c * c;
// 	volumeD = d * d * d;
// 	total = volumeA + volumeB + volumeC + volumeD;

// 	return total;
// }

// console.log(menghitungJumlahEmpatKubus(8, 3, 2, 9));
// console.log(menghitungJumlahEmpatKubus(10, 20, 30, 40));

// Contoh Function Expression (Ekspresi)
let menghitungJumlahEmpatKubus = function(a, b, c, d) {
	let total, volumeA, volumeB, volumeC, volumeD;

	volumeA = a * a * a;
	volumeB = b * b * b;
	volumeC = c * c * c;
	volumeD = d * d * d;
	total = volumeA + volumeB + volumeC + volumeD;

	return total;
}

console.log(menghitungJumlahEmpatKubus(1, 2, 3, 4));
console.log(menghitungJumlahEmpatKubus(10, 20, 30, 40));