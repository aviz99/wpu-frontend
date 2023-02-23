var jmlhAngkot = 10;
var angkotBeroperasi = 6;

// while(noAngkot <= angkotBeroperasi) {
//     console.log("No.Angkot " + noAngkot + " beroperasi dengan baik.");
// noAngkot++
// }

// for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlhAngkot; noAngkot++) {
//     console.log("No.Angkot " + noAngkot + " sedang tidak beroperasi.");
// }

for( var noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++ ) {
        if( noAngkot <= angkotBeroperasi && noAngkot != 5) {
            console.log("No.Angkot " + noAngkot + " beroperasi dengan baik.");
        } else if ( noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
            console.log("No.Angkot " + noAngkot + " sedang lembur.");
        } else {
            console.log("No.Angkot " + noAngkot + " sedang tidak beroperasi.");
        }
    }
