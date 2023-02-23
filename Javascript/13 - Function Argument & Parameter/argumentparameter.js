// Parameter
// Variabel yang ditulis didalam kurung pada saat function dibuat, digunakan untuk menampung nil;ai yang dikirimkan saat function dipanggil

// Argument
// Nilai yang dikirimkan ke parameter saat fungsi dipanggil

// Contoh :
// function jumlahBilangan(a,b(Parameter)) {
//		return a + b; 
// }
// let jumlah = jumlahBilangan(1,2(Argument));

// Arguments
// Array yang berisi nilai yang dikirimkan saat fungsi dipanggil
// Arguments bertipe pseudo-variable (variabel semu)

function tambah() {
	let hasil = 0;
	for( i = 0; i < arguments.length; i++){
		hasil += arguments[i];
	}
	return hasil;
}

let coba = tambah(1,2,3,4,5);
console.log(coba);

// function penjumlahan(a,b){
// 	return a + b;
// }
// let a = parseInt(prompt('Masukkan Nilai 1 : '));
// let b = parseInt(prompt('Masukkan Nilai 2 : '));
// let hasil = parseInt(prompt(penjumlahan(a,b)));
// console.log(hasil);

// function jumlahBilangan(a,b) {
// 	return a + b;
// }

// function kaliBilangan(a,b) {
// 	return a * b;
// }

// let hasil = kaliBilangan(jumlahBilangan(1,2), jumlahBilangan(3,4));
// console.log(hasil);