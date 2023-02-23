// function hitungKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var hasil;
    
//     volumeA = a * a * a;
//     volumeB = b * b * b;
//     hasil = volumeA + volumeB;
//     return hasil;
// }

// console.log( hitungKubus(9, 8) );

// function loopingDenganFunction(loop) {
//     for( loop = loop + 1; loop <= 10; loop++) {
//         console.log("Angka ke-" + loop);
//     }
// }
// loopingDenganFunction(0);

// function pengkondisianDenganFunction(cabang) {
//     if ( cabang % 2 == 0) {
//         console.log("Angka yang anda masukkan adalah genap");
//     } else if ( cabang % 2 == 1) {
//         console.log("Angka yang anda masukkan adalah ganjil");
//     } else {
//         console.log("Angka yang anda masukkan salah");
//     }
// }

// pengkondisianDenganFunction("ali");

function tambahArgumentPakeS() {
    var hasil = 0;
    for( i = 0; i < arguments.length; i++ ) {
        hasil += arguments[i];
    }

    return hasil;
}

var coba = tambahArgumentPakeS(3,4,5,6);
console.log(coba);