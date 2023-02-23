// Rekursif / Recursion
// Sebuah fungsi yang bisa memanggil dirinya sendiri
// Rekursif harus berakhir dan menghasilkan nilai
// Base Case dimana kondisi sebuah rekursif berhenti atau kondisi akhir dari rekursif yang menghasilkan nilai
// Faktorial konsep matematika untuk melakukan perkalian secara mundur
// contoh : 5! = 5 x 4 x 3 x 2 x 1
// Semua looping bisa dibuat rekursif, tapi tidak sebaliknya
// Implementasi Rekursif
// Menggantikan looping, Fibonacci, Pencarian dan penelusuran pada struktur data list dan tree, Bahasa pemrograman yang tidak memiliki pengulangan seperti haskell, erlang, prolog dll

// function tampilBilangan(n) {
// // // 	// Base Case
// 	if(n === 0) {

// 		return;
// 	}

// 	console.log(n);
// 	return tampilBilangan(n-1);
// }
// tampilBilangan(10);

function tampilBilanganFaktorial(n) {
	if( n === 0) return 1;
	return n * tampilBilanganFaktorial(n-1);
}

var faktorial = tampilBilanganFaktorial(5);
console.log(faktorial);

// function faktorial(n) {
// 	var hasil = 1;
// 	for( var i = n; i > 0; i-- ) {
// 		hasil *= i;
// 	}
// 	console.log(hasil);
// 	return hasil;
// }

// faktorial(5);
