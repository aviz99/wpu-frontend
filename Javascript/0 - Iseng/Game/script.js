let tanya = true;
while ( tanya ) {
    // Tentukan Pilihan Player
    let p = prompt('Gajah, Manusia, Semut');

    // Tentukan Pilihan Computer
    // Membangkitkan / Mengenerate bilangan acak
    let comp = Math.random();

    if ( comp < 0.34) {
        comp = 'Gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'Manusia';
    } else {
        comp = 'Semut';
    }
    console.log(comp);

    // Tentukan Rules
    let hasil = '';
    if( p == comp) {
        hasil = 'SERI';
    } else if (p == 'Gajah') {
        hasil = ( comp == 'Manusia' ) ? 'MENANG!' : 'KALAH!';
    } else if ( p == 'Manusia' ) {
        hasil = ( comp == 'Gajah' ) ? 'KALAH!' : 'MENANG!';   
    } else if ( p == 'Semut' ) {
        hasil = ( comp == 'Orang' ) ? 'KALAH!' : 'MENANG!';   
    } else {
        hasil = ' Anda memasukkan pilihan yang salah!!!';
    }

    // Tampilkan Hasilnya
    alert('Kamu memilih : '+ p + ' dan Komputer memilih : '+ comp + '\nMaka hasilnya adalah kamu : '+ hasil);

    tanya = confirm('Mau Coba Lagi ?');
}

alert('Terima Kasih Sudah Bermain.');