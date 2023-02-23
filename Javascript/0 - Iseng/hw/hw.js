// var bilanganPrima = 1;

// for( var bilanganPrima = bilanganPrima + 1; bilanganPrima <= 10; bilanganPrima++) {
//     if( bilanganPrima <= 7 && bilanganPrima !== 4 && bilanganPrima !== 6) {
//         console.log("Ini adalah bilangan prima yang ke-" + bilanganPrima);
//     }
// }

// var bilanganDiKaliDua = 2;

// for( var bilanganDiKaliDua = bilanganDiKaliDua; bilanganDiKaliDua <= 128; bilanganDiKaliDua++) {
//     if( bilanganDiKaliDua % 2 == 0 ) {
//         console.log(bilanganDiKaliDua);
//     }
// }
// var y = '';

// for( var i = 10; i > 0; i--) {
//     for( var j = 0; j < i; j++) {
//         y += '*';
//     }
//     y += '\n';
// }
// console.log(y);

var lagi = true;
while (lagi) {
	alert('Tebak angka dari 1 - 10!\nKamu punya 3 kesempatan.');
	var comp = Math.round (Math.random() * 10);
	var hasil = '';
	for (var i = 3; i > 0; i--) {
		var p = prompt('Masukkan Angka tebakan!');
		j = i - 1;
		if (p == '') {
			alert('Yang anda masukkan bukan angka');
			i = 0;
		} else if (p == null) {
			i = 0;	
		} else {
			if (p == comp) {
				alert('Anda BENAR!\nAngka yang dicari adalah ' + comp);
				i = 0;
			} else if (p < comp) {
				if (j == 0) {
					alert('Anda GAGAL!\nAngka yang dicari adalah ' + comp);
				} else {
					alert('Terlalu RENDAH!\nAyo masih ada ' + j + ' kesempatan');
				}
			} else if (p > comp) {
				if (j == 0) {
					alert('Anda GAGAL!\nAngka yang dicari adalah ' + comp);
				} else {
					alert('Terlalu TINGGI!\nAyo masih ada ' + j + ' kesempatan');
				}
			} else {
				alert('Yang anda masukkan bukan angka');
				i = 0;
			}
		}
	}
	lagi = confirm('Main lagi?');
}
alert('Terima kasih.');