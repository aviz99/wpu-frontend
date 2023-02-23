// Segitiga Sama Kaki
let s = '';
for(let i = 1; i <= 9; i++) {
	for(let y = 1; y <= 9 - i; y++) {
		s += ' ';
	}
 	for(let h = 1; h < 2 * i; h++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);

// Segitiga Biasa
// let s = '';
// for(let i = 0; i <= 10; i++) {
// 	for(let j = 0; j <= i; j++) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

//  Segitiga Biasa Di Balik
// let s = '';
// for(let i = 10; i >= 0; i--) {
// 	for(let j = 0; j < i; j++) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);