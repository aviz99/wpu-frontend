// || OR atau (keadaan jika salah satu nilai ada true maka hasil nya akan true)
// && AND dan (keadaan jika 2 nilai tersebut harus bernilai true)
// ! NOT tidak (keadaan jika 2 atau 1 nilai brnilai true maka akan dibalikkan menjadi false)

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

for(angkot = 1 ; angkot <= jmlAngkot; angkot++){
	if( angkot <= 6){
		console.log('Angkot No.'+ angkot +' beroperasi dengan baik.');
	} else if(angkot === 8 || angkot === 10){
		console.log('Angkot No.'+ angkot +' sedang lembur.');
	} else {
		console.log('Angkot No.'+ angkot +' sedang tidak beroperasi.');
	}
}