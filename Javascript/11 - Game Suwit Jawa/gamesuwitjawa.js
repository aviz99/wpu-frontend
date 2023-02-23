var tanya = true;
while ( tanya ) {
	// menangkap pilihan player
	var p = prompt('pilih : gajah, semut, manusia');

	// menangkap pilihan komputer
	// membangkit bilangan random
	var comp = Math.random();

	if( comp < 0.34 ){
		comp = 'gajah';
	} else if(comp >= 0.34 && comp < 0.67) {
		comp = 'manusia';
	} else {
		comp = 'semut';
	}

	var hasil = '';
	// menetukan rules
	if( p == comp ){
		hasil = 'SERI!';
	} else if( p == 'gajah') {
		hasil = ( comp == 'manusia' ) ? 'MENANG!' : 'KALAH!';
	} else if( p == 'manusia') {
		hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!';
	} else if( p == 'semut') {
		hasil = ( comp == 'manusia') ? 'KALAH!' : 'MENANG!';
	} else {
		hasil = 'Memasukkan pilihan yang salah!!!';
	}

	// menampilkan hasil
	alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : ' + hasil);

	tanya = confirm('Mau coba lagi ?');
}


alert('Terima kasih sudah bermain.');