// ES atau ECMAScript
// ES5 atau Vanilla Javascript atau Plain Javascript

// 1. Variable
// 2. function -> Fat Arrow Function
// 3. Destructuring
// 4. Rest Operator, Spread Operator
// 5. Class
// 6. Template Strings

// Primitive Type
// Number, boolean, string

// Reference Type
// Object, Array

// 1. Variable
// var, let , const
let a = 10; // var === let
a = 20;
console.log(a);

// const - konstanta
const b = 11;
// b = 10; // tidak bisa diubah valuenya untuk
// primitive type
console.log(b);

const c = {
  a: 10,
  b: 20
};

c.a = 20;
c.c = 10;
console.log(c.a, c.c);

// ES5
// function sebutNama() {

// }

// var sebutUmur = function() {
// }

let sebutNama = (nama) => {
  console.log(nama);
}

sebutNama('Jois');

let z = [1, 2, 3];
// anonymous function
z.map(value => {
  console.log('Value ' + value);
});

// function getNama(nama) {
//   return nama;
// }

let getNama = nama => nama;
console.log(getNama("Vera"));

// 3. destructuring

const kelas = {
  name: '1A',
  jumlah: 10
};

let name = 'Jois';

let { name: nama, jumlah } = kelas;

console.log(nama, jumlah);
// destructuring pada parameter function
let sebutData = ({ nama }, { nama: namaKedua }) => {
  console.log('Nama: ', nama, namaKedua);
}

sebutData(
  { nama: "Jafar", usia: 24 },
  { nama: "Imam" });


// Spread Operator

// let kelas2 = kelas; //deep copy
// kelas2.name = '2A';
// kelas2.ketua = 'Jois';
// console.log('kelas2',kelas2, 'kelas',kelas);

// deep copy object - ES5
// const parentKelas = {
//   name: '',
//   jumlah: 0,
//   ketua: ''
// };

// const kelas_1 = Object.assign({}, parentKelas);
// kelas_1.name = "1A";
// kelas_1.wali = "Jois";
// console.log(kelas_1, parentKelas);

// // array deep copy - ES5
// const hobbies = ["football", "diving"];

// const myHobbies = hobbies.slice();
// myHobbies.push("cooking");

// console.log(hobbies, myHobbies);

// ES6 Deep Copy - Spread Operator -> ...
const kelasUtama = {
  name: '',
  jumlah: 0,
  ketua: ''
}

const kelas_1 = {
  ...kelasUtama,
  wali: "jois"
};

console.log(kelas_1, kelasUtama);

const hobbies = ["football", "diving"];

const myHobbies = [
  ...hobbies,
  "cooking",
  "surfing"
];

console.log(myHobbies, hobbies);

// Default parameter function
let showData = (name = "Jois") => {
  console.log('Default Name ' + name);
}

showData();
// Rest Operator -> ... -> parameter function

let sumAll = (...angka) => {
  let sum = 0;
  for (let i of angka) {
    sum = sum + i;
  }

  console.log(sum);
}

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9);

let putData = (nama, ...hobbies) => {
  console.log(nama, hobbies);
}

putData("Jois", "Diving", "Football", "Swimming");

function getData() {
  console.log(arguments);
}

getData("Jois", "Jafar", "Imam");

function hitungSegitiga(alas) {
  console.log(alas, arguments);
  return 0.5 * alas * arguments[1];
}

hitungSegitiga(5, 7)

// 6. Template Strings -> '',"",``
let hewan = "gajah";
let hasil = `Hewan Saya Adalah ${hewan}, sangat besar`;
console.log(hasil);

// Exercise
/* 1. Buatlah contoh penggunaan 
  Variable, Fat Arrow Function,
  Destructuring, Spread Operator,
  Rest Parameters & template strings
  
  Notes: TIDAK BOLEH SAMA DENGAN CONTOH
  Minimum Contoh tiap2 kategori adalah 3
  dan harus unique / tidak sama
*/

// 2. manfaatkan Rest Parameters untuk menghitung
// Penjumlahan, Pengurangan, Pembagian, Perkalian
// function(type, ...data);

let operasiAritmatika = (type, ...data) => {
  let hasil = 0;

  switch (type.toLowerCase()) {
    case 'penjumlahan':
      data.map(angka => {
        hasil += angka;
      })

      return hasil;
    case 'pengurangan':
      data.map(angka => {
        hasil -= angka;
      })

      return hasil;
    case 'pembagian':
      data.map(angka => {
        hasil /= angka;
      })

      return hasil;
    case 'perkalian':
      data.map(angka => {
        hasil *= angka;
      })

      return hasil;
    default:
      return "Type Tidak ditemukan"
  }
}

let result = operasiAritmatika("pembagian", 1, 2, 3, 4, 5);
console.log(result);

// OOP ->
// Class
// Inheritance
// Polymorphism -> Overloading & Overriding
// Encapsulation -> getter, setter

class Hewan {
  //   variable di dalam class disebut property
  //   access modifier: public, private, protected -> typescript
  name;
  age;
  type;

  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  sebutNama() {
    console.log(this.name);
  }

  //   getter prop: age
  getAge() {
    return this.age;
  }

  //  setter prop: age
  setAge(age) {
    this.age = age;
  }

  //   getter prop: name
  getName() {
    return this.name;
  }

  //  setter prop: name
  setName(name) {
    this.name = name;
  }

  ambilData() {
    return `${this.name} berumur ${this.age} merupakan seekor ${this.type}`;
  }
}

class Monyet extends Hewan {
  ambilData(setType) {
    return `${this.name} berumur ${this.age} merupakan seekor ${setType ? setType : this.type}`;
  }
}

let kurakura = new Hewan();
kurakura.setName("Jois");
kurakura.setAge(3);

let anjing = new Hewan("Jafar", 3, "Anjing");

let budi = new Monyet();
budi.setName("Budi");
budi.setAge(5);


// kurakura.sebutNama();
console.log(
  kurakura.getName(),
  kurakura.getAge(),
  anjing.getName(),
  kurakura.ambilData(),
  anjing.ambilData(),
  budi.ambilData(7, "Monyet")
);

// Buat 1 class tidak boleh sama masing2
// lalu buat property dan getter setter nya

// Buat 1 class baru dan 1 class yg inheritance
// ke kelas utamanya
// set properti min 3, berikan getter setter






