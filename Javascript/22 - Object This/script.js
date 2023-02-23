// this
// var a = 10;
// console.log(this.a);


// Membuat Object

// cara 1 - Function Declaration
// function halo() {
// 	console.log(this);
// 	console.log('halo');
// }
// this.halo();
// this adalah mengembalikan object global



// cara 2 - Object Literal
// var obj = { a : 10, nama : 'Ali Havizni'};
// obj.halo = function() {
// 	console.log(this);
// 	console.log('halo');
// }
// obj.halo();
// this adalah mengembalikan object yang bersangkutan


// cara 3 - Constructor
function Halo() {
	console.log(this);
	console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat


































