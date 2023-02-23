// Refactoring
// Sebuah proses mengubah kode agar menjadi lebih baik tanpa mengubah fungsionalitasnya.
// Readability (kemudahaan dalam membaca kode program.)
// DRY (Don't repeat Yourself) atau duplikasi kode bisa penggunaan kode yang berlebihan.
// Testability atau penulisan kode agar mudah pada saat dilakukan pengujian.
// Performance atau bagaimana kita menulis kode yang dapat meningkatkan performansi dari programnya.
// Maintainability atau bagaimana program kita nantinya dapat dengan mudah dikelola atau dikembangkan. 

function menghitungJumlahEmpatKubus(a, b){

	return a * a * a + b * b * b;
}

alert(menghitungJumlahEmpatKubus(8,3));