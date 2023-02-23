// Popup Box / Dialog Box
// alert, prompt(mengembalikan nilai inputan apapun yang user tuliskan di inputan tsb), confirm(mengembalikan nilai boolean (true atau false))


// alert
// alert('Hala Madrid!');

// prompt
// var klub = prompt('Masukkan Klub Bola Favorit : ');
// alert(klub);

// confirm
// var cek = confirm('Yang Bener ???');
// alert(cek);

// var tes = confirm('Are you sure ?');
// if( tes === true) {
// 	alert('User pushed OK');
// } else {
// 	alert('User pushed CANCEL');
// }

alert('Welcome')
var more = true;
while ( more === true ) {
	var nama = prompt('Masukkan nama : ');
	alert('hi ' + nama);

	more = confirm('Try again ?');
}

alert('Thank You.');