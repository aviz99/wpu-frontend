// Object Literal
// var person = {

//     firstName : "Komar",
//     lastName : "Tajurrudin",
//     age : 28,
//     height : 180,
//     weight : 72,
//     job : "Farmer",
//     address : {
//         street : "Jl. Sukaribut No.098 ",
//         city : "Tangerang",
//         province : "Banten"
//     }

// };

// Object Declaration Function
// function buatObjectIdentitas(name, age, job, height, weight, city) {

//     var person = {};
//     person.name = name;
//     person.age = age;
//     person.job = job;
//     person.height= height;
//     person.weight = weight;
//     person.city = city;

//     return person;

// }

// var person2 = buatObjectIdentitas("David Normand Junior","35","Fullstack Engineer", 176, 69, "Wimbledon");

// Object Constructor Function
// function Person(name, age, job, height, weight, city) {

//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.height = height;
//     this.weight = weight;
//     this.city = city;

// }

// Instansiasi
// var person3 = new Person("Thompson Hernandez", 34, "Software Engineer", 181, 74, "Tijuana");

// console.log(this === window);

// Function Declaration
// function hello() {
//     console.log(this);
//     console.log("hello world!!!")
// }
// // this mengembalikan object global di function declaration
// this.hello();

// Object Literal
// var obj = {};
//     obj.hello = function() {
//         console.log(this);
//         console.log("Hello World!!!");
//     }
// this mengembalikan object yang bersangkutan dengan menggunakan object literal
// obj.hello();

// Object Constructor

// function hello() {
//     console.log(this);
//     console.log("Hello World!!!");
// }
// // this mengembalikan object yang baru dibuat di object constructor
// new hello();





// study case - Juragan Angkot

function Angkot(supir, trayek, penumpang, kas) {

    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.naikPenumpang = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.turunPenumpang = function(namaPenumpang, bayar) {
        if ( this.penumpang.length === 0 ) {
            console.log("Angkot masih kosong.");
            return false;
        }

        for( var i =0; i < this.penumpang.length; i++ ) {
            if ( this.penumpang[i] == namaPenumpang ) {
                this.penumpang[i] = "";
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }

}

var angkot1 = new Angkot("Ilham Nurdiansyah", ["Gading Serpong", "Legok"], [], 0);
var angkot2 = new Angkot("Theo Rodriguez", ["Cihideung", "Manchester"], [], 0);

























