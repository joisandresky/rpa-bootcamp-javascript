// PERULANGAN
// FOR, FOREACH, WHILE, DO WHILE

// 1. WHILE
var i = 0;
var finish = false;
while (!finish) {
  i++;
  console.log('Looping ke - ' + i);
  if (i === 10) {
    finish = true;
  }
}

// 2. DO - WHILE
do {
  console.log('do ' + i);
  i++;
} while (i < 10);

// 3. FOR
for (var i = 0; i <= 10; i++) {
  console.log('ii', i);
}

// 1. Buat Perulangan untuk menampilkan angka ganjil
// 2. Buat perulangan untuk menampilkan angka 0, -10
// 3. buat perulangan 1-50
// untuk menampilkan tulisan angka yg genap
// CONTOH:
// 2- GENAP
// 4- GENAP

// Soal 1
for (var i = 1; i <= 50; i += 2) {
  console.log('GANJIL: ' + i);
}

// Soal 2
for (var i = 0; i >= -10; i--) {
  console.log('ANGKA: ' + i);
}

// Soal 3
for (var i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("GENAP: " + i);
  }
}

// Looping Array
var hobbies = [
  "makan",
  "minum",
  "tidur",
  "ngoding",
  "gaming"
];

// 1. While or Do While
var i = 0;
while (i < hobbies.length) {
  console.log('[WHILE] Hobi: ' + hobbies[i]);
  i++;
}

do {
  console.log('[DO-WHILE] Hobi: ' + hobbies[i]);
  i++;
} while (i < hobbies.length);

// 2. FOR
for (var i = 0; i < hobbies.length; i++) {
  console.log('[FOR] Hobi: ' + hobbies[i]);
}

// 3. FOREACH
for (var hobi of hobbies) {
  console.log('[FOREACH] Hobi: ' + hobi);
}

// Array function
// forEach, map, filter, findIndex, indexOf, find, 

// 1. forEach
hobbies.forEach(function (hobi, i) {
  console.log('[forEach] Hobi: ' + hobi + ' i: ' + i);
});

// 2. map
hobbies.map(function (hobi, i) {
  console.log('[map] Hobi: ' + hobi + ' i: ' + i);
});

// 3. Filter
// Filter yang huruf depan 'm'
var hasil = hobbies.filter(function (hobi) {
  return hobi[0] === 'm';
});

// Filter yang mengandung huruf 'm'
var hasil = hobbies.filter(function (hobi) {
  return hobi.indexOf("m") > -1;
});
console.log('hasil', hasil);

// 4. indexOf - Loop String
var index = hobbies[0].indexOf("mak");
console.log('index', index);

// 5. findIndex
// Mencari index pada data array
var index = hobbies.findIndex(function (hobi) {
  return hobi === "tidur";
});

console.log('Index', index, hobbies[index]);
// 6. find
// Mencari index pada data array
var data = hobbies.find(function (hobi) {
  return hobi === "tidur";
});

console.log('data', data);

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
    name: "Imam",
    age: 23
  }
];

// Filter
var hasil = students.filter(function (student) {
  return student.age <= 22;
});

// console.log('Hasil', hasil);

// MAP
students.map(function (student) {
  console.log('student', student.name);
});

// findIndex
var index = students.findIndex(function (student) {
  return student.age <= 22;
});

console.log('Hasil', index, students[index]);

// find
var hasil = students.find(function (student) {
  return student.age <= 22;
});

console.log('Hasil', hasil);

// chaining array function
students.filter(function (student) {
  return student.age <= 22;
}).map(function (student) {
  console.log('student', student.name)
});


// EXERCISE
var data = [
  {
    name: 'Teki',
    age: 22,
    hobbies: ["ngampus", "makan", "gaming"],
    address: {
      street: 'Jl. apa',
      city: 'Bekasi',
      zipcode: 17340
    },
    educations: [
      {
        name: 'SMKN xxx',
        periode: '2012 - 2015'
      }
    ]
  },
  {
    name: 'Imam',
    age: 22,
    hobbies: ["makan", "tidur", "gaming"],
    address: {
      street: 'Jl. apa 3',
      city: 'Bekasi',
      zipcode: 17340
    },
    educations: [
      {
        name: 'SMKN ZZZZ',
        periode: '2012 - 2015'
      }
    ]
  },
  {
    name: 'Jafar',
    age: 26,
    hobbies: ["tidur", "ngoding", "ternak"],
    address: {
      street: 'Jl. itu 5',
      city: 'Tangerang',
      zipcode: 11111
    },
    educations: [
      {
        name: 'SMKN TWWW',
        periode: '2006 - 2009'
      }
    ]
  },
]

