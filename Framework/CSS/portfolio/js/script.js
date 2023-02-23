// Event pada saat link di klik
$('.page-scroll').on('click', function(e){


	// Ambil isi href
	var tujuan = $(this).attr('href');
	// Tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// Pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});
