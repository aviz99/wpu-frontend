// Pengkondisian IF
// contoh :
// if(kondisi) {
// 	aksi (lakukan aksi jika kondisi bernilai true)
// }
// keluar dari blok jika kondisi bernilai false

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

for( var i = angkot; i <= jmlAngkot; i++ ) {
	if( i <= angkotBeroperasi ) {
		console.log('Angkot No.' + i + ' beroperasi dengan baik.');
	} else {
		console.log('Angkot No.' + i + ' sedang tidak beroperasi.');
	}
}