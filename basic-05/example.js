// function
// () = parenthesis
// {} = curly braces
// [] = square brackets

function sebutNama() {
  console.log('Nama saya jois!');
}

var sebutUmur = function () {
  console.log('Umur saya 22');
}

function getNama() {
  console.log("Nama");
  return "Jois";
}

sebutNama();
sebutUmur();

var nama = getNama();
console.log(nama);

function jumlahkan() {
  var hasil = 2 + 2;
  return hasil > 5 ? "Lebih Dari 5" : "Kurang Dari 5";
}

console.log('Hasil', jumlahkan())


function tampilAngka(angka1) {
  return angka1;
}

console.log(tampilAngka(5))

function hitungSegitiga(alas, tinggi) {
  return 0.5 * alas * tinggi;
}
var alas = prompt();
var tinggi = prompt();
// alert(hitungSegitiga(alas, tinggi));
console.log(hitungSegitiga(alas, tinggi));

function test(angka) {
  console.log('TEST 1');
  console.log('TEST 2');
  console.log('TEST 3');
  console.log('TEST 4');
  console.log('TEST 5');
  if (angka > 5) {
    return;
  }
  console.log('TEST 6');
  console.log('TEST 7');
  console.log('TEST 8');
  console.log('TEST 9');
  console.log('TEST 10');
  console.log('TEST 11');
}

var hasil = test(6);

console.log(hasil);
function run(angka) {
  for (var i = 0; i < 20; i++) {

    if (i > angka) {
      console.log('SKIP ' + i);
      continue;
    }

    console.log('JALAN KE: ' + i);
  }
}

run(6);

// Array Manipulation
// push, pop, shift, unshift, splice, slice, sort

var fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Kiwi"
];

// 1. push
// memasukan data array di urutan terakhir
fruits.push("Strawberry");
console.log("[PUSH]", fruits);

// 2. pop
// menghapus data array di urutan terkahir
fruits.pop();
console.log("[POP]", fruits);

// 3. shift
// mnghapus data array di index pertama atau 0
fruits.shift()
console.log("[SHIFT]", fruits);

// 4. unshift
// memasukan data array di urutan pertama atau 0
fruits.unshift("Mango");
console.log("[UNSHIFT]", fruits);

// 5. splice
// memotong data array secara permanen
fruits.splice(0, 1);
console.log("[SPLICE]", fruits);

// 6. slice
// memotong data array tpi data asli tidak terpotong
var someFruits = fruits.slice(1, 3);
console.log("[SLICE]", fruits, someFruits);

// 7. sort
// menyortir urutan data array
fruits.sort().reverse()
console.log("[SORT]", fruits);

// 8. reverse
// membalikan urutan data array
fruits.reverse();
console.log("[REVERSE]", fruits);


// try - catch : error handling
function sebutAngka(angka) {
  if (angka > 5) {
    throw new Error('Error bro angka lebih dari 5');
    return;
  }

  console.log(angka);
}


try {
  sebutAngka(6);
} catch (err) {
  console.log('err', err);
}

// Buatlah function yang dapat menghitung operasi 
// ini : hitung luas segitiga, hitung luas persegi,
// hitung keliling lingkaran, penjumlahan,
// pengurangan, pembagian, dan modulus
// phi: 3.14
// parameter hanya 2 (type & value);
// luas segitiga :  0.5 * alas * tinggi
// luas persegi : s * s * s * s 
// keliling lingkaran: phi * r ^ 2
// untuk pemangkatan gunakan Mat.pow()
var phi = 3.14;
function operasiMtk(type, value) {
  if (!type) return "Tipe Harus Diisi";

  switch (type.toUpperCase()) {
    case "L_SEGITIGA":
      return 0.5 * value.alas * value.tinggi;
    case "L_PERSEGI":
      return Math.pow(value.s, 4);
    case "K_LINGKARAN":
      return phi * Math.pow(value.r, 2);
    case "PENJUMLAHAN":
      return value.angka1 + value.angka2;
    case "PENGURANGAN":
      return value.angka1 - value.angka2;
    case "PEMBAGIAN":
      return value.angka1 / value.angka2;
    case "MODULUS":
      return value.angka1 % value.angka2;
    default:
      return "Tipe Tidak Ditemukan"
  }
}

console.log(operasiMtk("penjumlahan", { angka1: 1, angka2: 2 }));
console.log(operasiMtk("pengurangan", { angka1: 1, angka2: 2 }));
console.log(operasiMtk("l_segitiga", { alas: 5, tinggi: 7 }));
console.log(operasiMtk("k_lingkaran", { r: 10 }));





// 1. Buatlah satu data array jumlah dan isinya bebas min: 10
// lakukan perulangan sebanyak 20x dan lakukan manipulasi 
// data ketika kondisi berikut
// i === 5 -> push
// i === 3 -> push
// i === 18 -> push
// i === 7 -> pop
// i === 12 -> shift
// i / jumlah array === 2 -> unshift
// i === 20 -> splice
// i === 1 -> reverse

// data.length -> mengambil jumlah array data


/*
2. Buatlah function untuk mencari suatu data pada array
ex: data = [1,2,3,4,5,6];
cari: index dari angka 4 nya
notes: tidak boleh pakai method find & findIndex
*/

// 1
var data = [
  "Jois", "Vera", "Jafar", "Imam", "Shima", "Teki", "Aris",
  "Rival", "Dika", "Seto"
];

for (var i = 0; i <= 20; i++) {
  if (i === 5) {
    data.push("Nur")
    console.log('[i === 5 PUSH]');
  }

  if (i === 3) {
    data.push("Zul")
    console.log('[i === 3 PUSH]');
  }

  if (i === 18) {
    data.push("Jo")
    console.log('[i === 18 PUSH]');
  }

  if (i === 7) {
    data.push()
    console.log('[i === 7 POP]');
  }

  if (i === 12) {
    data.shift()
    console.log('[i === 12 SHIFT]');
  }

  if (i / data.length === 2) {
    data.unshift("Feri")
    console.log('[i / data.length === 2 UNSHIFT]');
  }

  if (i === 20) {
    data.splice(0, 1)
    console.log('[i === 20 SPLICE]');
  }

  if (i === 1) {
    data.reverse();
    console.log('[i === 1 REVERSE]')
  }
}

console.log('dafta', data);

function cariData(dataArray, yangDiCari) {
  var found = null;
  dataArray.map(function (dt, i) {
    if (dt === yangDiCari) found = i;
  });

  return found;
}

var data = [1, 2, 3, 4, 5, 6];
console.log(cariData(data, 5));

