// DOM Manipulation

// method element.innerHTML;
// Method ini berfungsi untuk mengubah isi dari sebuah tag HTML yang sudah kita seleksi.
// const title = document.getElementById('title');
// title.innerHTML = '<em>Ali Havizni</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Noa Tsurushima Nikah Dengan Ali Havizni';

// method element.style.<propertiCSS>;
// const title = document.querySelector('#title');
// title.style.color = 'white';
// title.style.backgroundColor = 'black';

// method element.getAttribute();
// method element.setAttribute();
// method element.removeAttribute();
// untuk mengelola atribut, atribut itu sesuatu yang menempel pada elemen html.
// const title = document.getElementsByTagName('h1')[0];
// title.setAttribute('name', 'ali');
// const aLink = document.getElementsByTagName('a')[0];
// aLink.setAttribute('type', 'label');
// title.removeAttribute('name', 'ali');
// aLink.removeAttribute('type', 'label');


// method element.classList;
// method element.classList.add(); -> untuk menmabah kelas baru.
// method element.classList.remove(); -> untuk menghapus kelas.
// method element.classList.toggle(); -> untuk menambahkan class pada elemen html yang tidak punya class dan menghapus sebuah class jika ada class pada elemen html tersebut.
// method element.classList.item(); -> untuk mengetahui class tertentu yang didalam sebuah elemen html.
// method element.classList.contains(); -> untuk mengecek dalam sebuah elemen html punya atau tidak class tertentu.
// method element.classList.replace(); -> untuk mengganti class yang ada dengan class yang baru.
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label');
// p2.classList.item(1);
// p2.classList.contains('p2');
// p2.classList.replace('p2','Kelas Bawah');

// Node Manipulation

// method yang lama
// method dari node manipulation
// namaNodenya.methodNodeNya();
// document.createElement();
// document.createTextNode();
// node.appendChild();
// node.insertBefore();
// parentNode.removeChild();
// parentNode.replaceChild();

// method yang baru
// method dari node manipulation
// namaNodenya.methodNodeNya();
// parentNode.append();
// parentNode.prepend();
// childNode.before();
// childNode.after();
// childNode.remove();
// childNode.replaceWith();

// Buat element baru
// note : Kita buat dulu tag nya lalu kita suruh javascript untuk membuat teks nya, setelah kita sudah buat kedua nya, kita minta ke javascriptnya supaya teksnya ke dalam tag p (paragraf) dan terakhir kita suruh supaya javascriptnya simpan node baru kita atau element baru kita ke dalam html atau tempat yang akan kita tuju. 
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// Simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// Simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item 4');
liBaru.appendChild(teksLiBaru);

// note : Jika ingin menyisipkan sebuah elemen baru kita harus tau dari parent dari elemen yang ingin kita sisipkan, lalu kita harus tangkap element setelah nya.
const ul = document.querySelector('section#b ul');
// jika tidak ada id dan kelas nya kita bisa memanfaatkan pseudo-class dari element tersebut.
// const li2 = document.querySelector('section#b ul li:nth-child(2)');

// untuk mempersempit scope nya.
const li2 = ul.querySelector('li:nth-child(2)');

// panggilElemenParentNya.insertBefore(nodeBaruYangAkanDisimpan, akanDismpanSebelumElemenApa);
ul.insertBefore(liBaru, li2);

// note : Jika ingin menghapus sebuah node nya kita harus tau terlebih dahulu parent dari elemen nya atau elemen yang akan kita hapus.
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// note : Jika ingin mengganti sebuah node nya kita harus tangkap terlebih dahulu parent dari elemen nya.
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('BOOM ID');
h2Baru.appendChild(teksH2Baru);

// panggilElemenParentNya.replaceChild(nodeBaruYangSudahDibuat, nodeLamaYangAkanGanti);
sectionB.replaceChild(h2Baru, p4);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';