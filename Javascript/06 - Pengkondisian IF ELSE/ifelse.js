// Pengkondisian IF
// contoh :
// if(kondisi) {
// 	aksi (lakukan aksi jika kondisi bernilai true)
// }
// keluar dari blok jika kondisi bernilai false

var numbers = prompt(' Masukkan angka : ');
if ( numbers % 2 === 0 ) {
    alert('Angka yang anda masukkan adalah angka GENAP.');
} else if ( numbers % 2 === 1 ) {
    alert('Angka yang anda masukkan adalah angka GANJIL.');
} else {
    alert('Maaf yang anda masukkan bukan angka.');
}