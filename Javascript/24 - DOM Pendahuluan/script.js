// DOM Pendahuluan
// DOM adalah antarmuka pemrograman untuk HTML yang merepresentasikan halaman web, sehingga program dapat mengubah dan memanipulasi strukturnya. (Mozilla)
// DOM adalah representasi elemen HTML pada dokumen menjadi sebuah object. (Pak Dhika WPU)
// DOM tersimpang sebagai pohon hirarki DOM atau DOM Tree.
// Tiap tiap kotak pada elemen DOM Tree disebut juga simpul atau node.

// Kesimpulannya :
// DOM adalah antarmuka pemrograman berbasis objek yang merepresentasikan dokumen web.
// DOM membuat seluruh komponen dari halaman web dapat diakses & dimanipulasi.
// Komponen nya adalah :
    // Elemen HTML
    // Atribut
    // Text
    // dll
// DOM dapat dimanipulasi (dibuat, diubah, dihapus) menggunakan javascript.

// DOM Tree
// representasi dari elemen elemen html didalam browser kalian yang representasi nya berupa pohon.
// Tipe tipe node
// Elemen, Attribute, Text, CData Section, Entity Reference, Entity, Processing Instruction, Comment, Document, Document Type, Document Fragment, Notation.

// NodeList & HTMLCollection
// Jika kita memilih lebih dari 1 simpul / node disebut NodeList.
// HTMLCollection adalah kumpulan node tapi khusus hanya elemen html nya saja.
// Keduanya merupakan kumpulan node.
// Struktur datanya mirip dengan array.
// nodeList dapat berisi node apapun, sedangkan HTMLCollection harus berisi elemen html.
// HTMLCollection bersifat live sedangkan nodeList tidak.
// Struktur Hierarki DOM
// Root Node atau node akar yang menjadi sumber dari semua node lain didalam DOM.
// node itu adalah document.
// Parent Node tergantung dari perspektif kita dalam memilih sebuah node.
// node yang berada 1 tingkat diatas dari node yang lain.
// body adalah parent dari h1, p, p, div dan a.
// Child Node adalah node yang berada 1 tingkat dibawah node yang lain.
// h1 adalah child dari body.

// Dom Selection
// getElementById() fungsinya untuk kita memilih elemen yang ada didalam DOM kita berdasarkan id nya.
// getElementsByTagName() fungsinya untuk kita memilih elemen yang ada didalam DOM kita berdasarkan nama tag nya.
// getElementsByClassName() fungsinya untuk kita memilih elemen yang ada didalam DOM kita berdasarkan nama kelas (Class) tertentu.
// Class boleh memiliki lebih dari 1 elemen.
// querySelector() digunakan untuk mencari elemen berdasarkan selectornya atau kriteria tertentu.
// querySelectorAll() digunakan untuk mencari elemen berdasarkan selectornya.

// getElementById() menghasilkan element
// getElementsByTagName() menghasilkan HTMLCollection
// getElementsByClassName() menghasilkan HTMLCollection
// querySelector() menghasilkan element
// querySelectorAll() menghasilkan nodeList

// DOM Selection

// getElementById()
// document.getElementById(); -> element
const title = document.getElementById('title');
// Kalo kita menambahkan sebuah element di javascript maka otomatis akan menambahkan inline pada css.
title.style.color = 'blue';
title.style.backgroundColor = 'yellow';
title.innerHTML = 'ALI HAVIZNI';

// getElementsByTagName()
// document.getElementsByTagName(); -> HTMLCollection
const p = document.getElementsByTagName('p');

for( let i = 0; i < p.length; i++ ) {
    p[i].style.color = 'green';
    p[i].style.backgroundColor = 'salmon';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// getElementsByClassName()
// document.getElementsByClassName(); -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = "Ali Suami Dari Noa Tsurushima";

// querySelector()
// document.querySelector(); -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'white';
p4.style.backgroundColor = 'black';
p4.style.fontSize = '20px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'lightblue';

// querySelectorAll()
// document.querySelectorAll(); -> nodeList
const p = document.querySelectorAll('p');
for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'darkgray';
}

// Node Root
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'yellow';

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'yellow';