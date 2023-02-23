// Variable Scope
// Block Scope & Function Scope
// Javascript menganut Function Scope.
// Didalam function kita bisa memanggil variabel global.
// Name Conflict sebuah nama variabel yang sama tetapi dengan scope yang berbeda.
// Selama kita membuat sebuah argument didalam function argument ini akan selalu akan menjadi local variabel meskipun kita tidak menulis keyword var didalam argument.

// Global Scope / Window Scope / Variabel Global
var a = 2;

function tes(a) {
	// Variabel Lokal
	console.log(a);

}

tes(a);
console.log(a);
