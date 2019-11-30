var angkaPertama = 1;
var kataPertama = "aku makan nasi";
var benarKah = true;
var angkaKedua = 1.5;


var peserta = {
  name: "Jois",
  age: 22,
  isMarried: false,
  address: {
    street: "Jl. Pemuda",
    city: "Bekasi",
    zipcode: 17340
  },
  hobbies: ["makan", "tidur"],
  sayHello: function () {
    console.log('Hello Semua!');
  }
};

var hobbies = [
  "Makan",
  "Tidur",
  "Nonton",
  ["Karate", "Berenang"]
];

// Array of Object
var students = [
  {
    name: "Jafar",
    age: 22,
  },
  {
    name: "Teki",
    age: 22
  },
  {
    nama: "Imam",
    umur: 23
  }
]

var namaPeserta = peserta['name'];
var hobiKedua = hobbies[1];
var hobiKetiga = hobbies[2];
var dataPertama = students[0];

console.log(
  namaPeserta,
  hobiKedua,
  hobiKetiga,
  hobbies[0],
  hobbies[3][0],
  dataPertama.name,
  dataPertama.age,
  peserta.hobbies[0]
);