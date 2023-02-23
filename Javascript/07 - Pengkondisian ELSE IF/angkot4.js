var jmlAngkot = 10;
var angkotBeroperasi = 6;

for( var i = 1; i <= jmlAngkot; i++ ) {
	if( i <= angkotBeroperasi ) {
		console.log('Angkot No.' + i + ' beroperasi dengan baik.');
	} else if( i === 8 ) {
		console.log('Angkot No.' + i + ' sedang lembur.');
	} else {
		console.log('Angkot No.' + i + ' sedang tidak beroperasi.');
	}
}