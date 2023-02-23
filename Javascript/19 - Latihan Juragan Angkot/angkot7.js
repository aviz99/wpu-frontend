var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {

	// Jika angkot kosong
	if( penumpang.length == 0 ) {

		// Tambah penumpang diawal array
		penumpang.push(namaPenumpang);

		// Kembalikan isi array & keluar dari function
		return penumpang;

	} else {

		// Telusuri seluruh kursi dari awal
		for( var i = 0; i < penumpang.length; i++) {

			// Jika ada kursi kosong
			if( penumpang[i] == undefined ) {

				// Tambah penumpang di kursi tersebut
				penumpang[i] = namaPenumpang;
				// Kembalikan isi array & keluar dari function
				return penumpang;
			}

			// Jika sudah ada nama yang sama
			else if( penumpang[i] == namaPenumpang ) {

				// Tampilkan pesan kesalahan
				console.log(namaPenumpang + ' sudah ada didalam angkot.');

				// Kembalikan isi array & keluar dari function
				return penumpang;
			}
			// Jika seluruh kursi terisi
			else if( i == penumpang.length - 1) {

				// Tambah penumpang di akhir array
				penumpang.push(namaPenumpang);

				// Kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}
}



var hapusPenumpang = function(namaPenumpang, penumpang) {
	
	// Jika angkot kosong
	if( penumpang.length == 0) {

		// Tampilkan pesan bahwa angkot kosong
		console.log('Angkot masih kosong.');

		// Kembalikan isi array & keluar dari function
		return penumpang;

	} else {

		// Telusuri kursi dari awal
		for( i = 0; i < penumpang.length; i++) {

			// Jika nama penumpang sesuai
			if( penumpang[i] == namaPenumpang ) {

				// Hapus penumpang dengan mengubah nama nya,
				// Menjadi undefined
				penumpang[i] = undefined;

				// Kembalikan isi array & keluar dari function
				return penumpang;

			}

			// Jika tidak ada nama yang sesuai
			else if( i == penumpang.length - 1 ) {

				// Tampilkan pesan kesalahan nya
				console.log( namaPenumpang + ' tidak ada didalam angkot.');

				// Kembalikan isi array & keluar dari function
				return penumpang;
			}
		}
	}	
}





















































