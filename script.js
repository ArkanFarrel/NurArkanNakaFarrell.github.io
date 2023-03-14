//methode filter()
//methode filterr() berfungsi untuk menyaring data di array
//parameter yang harus diberikan pada method filter() sama seperti methode forEach(), Yaitu : Sebuah fungsi callback

//contoh
// const angka = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];

// //Kita ambil data yang hanya habis dibagi dua saja
// const filterArr = angka.filter((item) => {
//     return item % 2 === 0
// });

// console.log(filterArr);

var mobil = [
{
    merek: `toyota`,
    nama: `gatauu`,
    pintu: 3
},

{
    merek: `nissan`,
    nama: `livina`,
    pintu: 2
},
{
    merek: `bmw`,
    nama: `lupaaa`,
    pintu: 2
},
{
    merek: `Ferrari`,
    nama: `gatauuu`,
    pintu: 2
},

];

let b = parseInt(prompt("Jumlah Pintu: "));
const mobilpintu = mobil.filter((mobil) => mobil.pintu === b);
console.log(mobilpintu);
document.write(mobilpintu);
