// Function Declaration & Function Expression


// Contoh Function Declaration (Deklarasi)
// function menghitungJumlahEmpatKubus(a, b, c, d) {
// 	let total, volumeA, volumeB, volumeC, volumeD;

// 	volumeA = a * a * a;
// 	volumeB = b * b * b;
// 	volumeC = c * c * c;
// 	volumeD = d * d * d;
// 	total = volumeA + volumeB + volumeC + volumeD;

// 	return total;
// }

// console.log(menghitungJumlahEmpatKubus(8, 3, 2, 9));
// console.log(menghitungJumlahEmpatKubus(10, 20, 30, 40));

// Contoh Function Expression (Ekspresi)
let menghitungJumlahEmpatKubus = function(a, b, c, d) {
	let total, volumeA, volumeB, volumeC, volumeD;

	volumeA = a * a * a;
	volumeB = b * b * b;
	volumeC = c * c * c;
	volumeD = d * d * d;
	total = volumeA + volumeB + volumeC + volumeD;

	return total;
}

console.log(menghitungJumlahEmpatKubus(1, 2, 3, 4));
console.log(menghitungJumlahEmpatKubus(10, 20, 30, 40));