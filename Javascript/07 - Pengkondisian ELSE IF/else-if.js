// Else-If
// contoh :
//  if(kondisi 1) {
// 		aksi 1
// } else if(kondisi 2) {
// 		aksi 2
// } else {
// 		aksi 3
// }

var angka = prompt('Masukkan angka:');
if(angka % 2 == 0){
	alert(angka + ' adalah bilangan GENAP');
} else if(angka % 2 == 1){
	alert(angka + ' adalah bilangan GANJIL');
} else {
	alert('yang anda masukkan bukan angka!');
}