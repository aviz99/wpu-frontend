// Method dalam array
// length untuk mengetahui ada berapa elemen didalam array.
// join untuk menggabungkan seluruh isi array dan mengubahnya menjadi string.
// push, pop, shift, unshift untuk menambah atau menghapus elemen array.
// push untuk menambahkan elemen baru diakhir array nya (bisa digabungkan yang ingin ditambahkan).
// pop untuk menghilangkan elemen terakhir pada array (harus satu persatu).
// Unshift untuk menambahkan atau menggeser elemen baru kedalam diawal array nya.
// Shift untuk menghilangkan atau mengeluarkan elemen awal pada array.
// Slice untuk mengambil beberapa bagian array untuk menjadikan array yang baru.
// Splice untuk menyambung atau menambalkan atau menyisipkan sebuah elemen ditengah-tengah menggunakan splice.
// forEach untuk melakukan looping pada array kita bisa melakukan sesuatu pada element - element yang ada pada array nya secara otomatis.
// forEach tidak mengembalikan array.
// Map digunakan untuk melakukan looping pada array kita bisa melakukan sesuatu pada element - element yang ada pada array nya tetapi kita bisa mengembalikan array.  
// Sort digunakan untuk mengurutkan isi tiap tiap elemen pada array nya.
// Filter digunakan untuk mencari sebuah elemen pada array tetapi bisa mengembalikan banyak elemen atau nilai pada tiap tiap array dalam bentuk array.
// Find digunakan untuk mencari sebuah elemen pada array tetapi bisa mengembalikan hanya satu elemen atau nilai saja.

// Manipulasi Array  

// 1. Menambah isi Array

// var arr = ["Ali",1996,true];
// console.log(arr);

// 2. Menghapus isi Array

// var arr = ["Ali","Havizni","Fajrul"];
// arr[2] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array

// var arr = ["Irfan","Romli","Fajrul","Dokas"];

// for(var i = 0; i < arr.length; i++){
// 	console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }


// Method pada array
// var listku = ['Asep','Nurdin','Tegar'];
// // 1. Join
// console.log(listku.join(', '));

// 2.Push & Pop
// listku.push('Cindy Gulla', 'Shania Gracia','Cindy Yuvia');
// listku.pop();
// console.log(listku.join(' - '));

// 3.Unshift & Shift
// listku.unshift('Park Sodam','Park Eunbin');
// listku.shift();
// console.log(listku.join(' - '));

// var listmu = ['Suga','Sehun','Son'];

// // 4.Splice
// // splice(indexAwal,mauDihapusBerapa(opsional),elemenBaru1(opsional),elemenBaru2(opsional),...)
// listmu.splice( 1, 2, 'Hwang','Eunha');
// console.log(listmu.join(' - '));

// 5.Slice
// slice(indexAwal,indexAkhir)
// var listmu2 = listmu.slice(0, 2);
// console.log(listmu2.join(' - '));


// 6.forEach
// var bilangan = [1,2,3,4,5,6,7,8];
// var nama = ['Raihan','Indah','Chika','Fathur'];

// namaArrayNya.forEach(namaFunction(namaElemen) {
//      aksi untuk tiap tiap elemen nya
// });
// artinya : untuk setiap elemen pada namaArrayNya lakukan namaFunction berikut ini

// bilangan.forEach(function(e) {
// 	console.log(e);
// });

// Dengan function expression
// var cetak = function(e) {
//     console.log(e);
// }
// bilangan.forEach(cetak);

// nama.forEach( function(e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e)
// });

// 7.Map
// var angka = [1,3,5,7,9];

// var angka2 = angka.map(function(e) {
// 	return e * 4;
// });
// console.log(angka2.join(' - '));

// 8.Sort
// var angka = [1,2,5,3,6,4,8,9,7];
// var angka2 = [1,10,15,14,12,13,11,2,5,3,6,4,8,9,7];
// namaArray.sort();
// angka.sort();
// console.log(angka.join(' - '));

// // Jika urutan elemen lebih dari 9
// angka2.sort(function(a,b) {
// 	return a-b;
// });
// console.log(angka2.join(' - '));

//  9.Filter
// var angka2 = [1,10,15,14,12,13,11,2,5,3,6,4,8,9,7];
// namaVariabel = namaArray.filter(namaFunction(namaParameter) {
//         aksi untuk element yang ingin dicari
// });
// var angka3 = angka2.filter(function(x) {
// 	return x > 9;
// });
// console.log(angka3.join(' - '));

// 10.Find
var angka2 = [1,10,15,14,12,13,11,2,5,3,6,4,8,9,7];
// namaVariabel = namaArray.find(namaFunction(namaParameter) {
//         aksi untuk element yang ingin dicari (hanya 1 nilai saja)
// });
var angka3 = angka2.find(function(x) {
	return x > 5;
});
console.log(angka3);
