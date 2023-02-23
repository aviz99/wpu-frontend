// Pengkondisian SWITCH
// contoh :
// switch(ekspresi) {
//		case "nilai 1": 
// 		aksi 1
//		[break; (opsional)]
//		case "nilai 2": 
// 		aksi 2
//		[break;]
//		case "nilai n": 
// 		aksi n
//		[break;]
// 		default:
// 			aksi default
// 		[break;]
// }

var item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi, jus jeruk, telur, pizza, boba)');

switch( item ) {
	case 'nasi' :
	case 'jus jeruk' :
	case 'telur' :
		alert('makanan / minuman SEHAT!');
		break;
	case 'pizza' :
	case 'boba' :
		alert('makanan / minuman TIDAK SEHAT!');
		break;
	default :
		alert('Anda memasukkan makanan / minuman yang salah!');
		break;
}