// DOM Events
// Events pada javascript adalah merepresentasikan sebuah kejadian yang terjadi pada DOM.
// Kejadian nya bisa terjadi pada user semisal nya kita mengklik pada mouse kita, ketika kita menekan tombol pada keyboard, mengisikan elemen pada input, mengerakkan mouse, dll.
// Events juga bisa dilakukan secara otomatis dengan API semisalnya ketika kita menjalankan sebuah animasi menggunakan css ketika animasi selesai dijalankan kita bisa menangkap events nya (kejadian), halaman kalian selesai diload kedalam memory itu dilakukan otomatis sama komputer atau istilahnya dengan API dll.
// How To Use For Javascript ????
// How to 'Hear' the Events ????
// Event Handler ada 2 jenis yang kita lakukan :
    // inline HTML attribute : kita bisa menambahkan atribut html secara inline.
    // Element Method
// addEventListener()
// How to used Event Handler ???
// elemenYangSudahDitangkap.on<event>=namaFunction(){
//      aksinya
// }
// onClick : event jika kita menekan sebuah mouse.

// Daftar Event
// Mouse Event
// Keyboard Event
// Resources Event
// Focus Event
// View Event
// Form Event
// CSS Animation & Transition Event
// Drag & Drop Event
// dll

// With Element Method
const p1 = document.querySelector('.p1');

function changeColor1() {
    p1.style.backgroundColor = 'salmon';
}

p1.onclick = changeColor1;

const p2 = document.querySelector('.p2');

function changeColor2() {
    p2.style.backgroundColor = 'lightgreen';
}

p2.onclick = changeColor2;

const p3 = document.querySelector('.p3');

function changeColor3() {
    p3.style.backgroundColor = 'lightblue';
}

p3.onclick = changeColor3;


// With addEventListener()

const p4 = document.querySelector('section#b p');
// elemenYangSudahDitangkap.addEventListener('Aksinya / Event', jalankanFunctionYangSudahDibuat);
// note : Jika ingin menambah sebuah element dengan menggunakan createElement(), kita harus mengetahui terlebih dahulu parent dari element yang kita buat.
p4.addEventListener('click',function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('New Item');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});

// perbedaannya
// Event Handler = Jika kita membuat sebuah event lebih dari satu, maka salah satu event sebelumnya maka akan tertimpah dengan event terakhir.
// addEventListerner = Jika memberikan lebih dari satu perubahan sebuah event, maka akan menambah perubahan nya tanpa tertimpah dengan event terakhirnya