// Membuat Object

// Object Literal
var mahasiswa1 = {
	nama : "Ali Havizni",
	nim : "201631253",
	email : 'alihavizni96@gmail.com',
	jurusan : 'Teknik Informatika'
};

var mahasiswa2 = {
	nama : "Dokas Putra Pamungkas",
	nim : "201611001",
	email : 'dokas97@gmail.com',
	jurusan : 'Teknik Elektro'
};

// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
	var mahasiswa = {};
	mahasiswa.nama = nama;
	mahasiswa.nim = nim;
	mahasiswa.email = email;
	mahasiswa.jurusan = jurusan;
	return mahasiswa;
}

var mahasiswa3 = buatObjectMahasiswa('Dinda Wahyudianingrum','201631002',
	'dindawd04@gmail.com','Teknik Informatika');

var mahasiswa4 = buatObjectMahasiswa('Neneng Anjarwati','201611003',
	'nenenganjay123@gmail.com','Teknik Sipil');

// Constructor
function Mahasiswa(nama, nim, email, jurusan) {
	// var.this = {};
	this.nama = nama;
	this.nim = nim;
	this.email = email;
	this.jurusan = jurusan;
	// return.this;
}

var mahasiswa5 = new Mahasiswa('Konas Tampubolon','201612004',
	'konaskonastampol99@gmail.com','Teknik Mesin');