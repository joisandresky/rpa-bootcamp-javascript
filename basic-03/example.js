// if, switch
// 1. IF -> IF, IF-ELSE, IF-ELSE-IF, IF BERSARANG
// 2. Switch -> Switch Case
// 3. ? -> ternary

// ===, !==, ==, !=, <, >, <=, >=

var angka = 4;

// IF
// 1. IF
if (angka <= 10) { // true - false
  console.log('angka kurang dari 10');
}

console.log('angka sebenarnya', angka);

// 2. IF ELSE
if (angka <= 10) { // true - false
  console.log('angka kurang dari 10');
} else {
  console.log('angka lebih dari 10');
}

// 3. IF ELSE IF
if (angka <= 10) { // true - false
  console.log('angka kurang dari 10');
} else if (angka <= 20) {
  console.log('angka kurang dari 20');
} else {
  console.log('angka lebih dari 20');
}

// 4. IF BERSARANG
if (angka <= 10) { // true - false
  console.log('angka kurang dari 10');
  if (angka === 11) {
    console.log('angka adalah 11');
  } else {
    console.log('angka bukan 11');
  }
}

// SWITCH
// 1. SWITCH CASE
switch (angka) {
  case 1:
    console.log('angka 1');
    break;
  case 2:
    console.log('angka 2');
    break;
  case 3:
    console.log('angka 3');
    break;
  default:
    console.log('angka tidak diketahui');
    if (angka > 5) {
      console.log('angka lebih dari 5', angka);
    }
}

// ? ternary operator
var cek = true;
var newAngka = !cek ? 10 : -1;
// if(angka > 5) newAngka = 10;
// else newAngka = -1;

// Operator Negasi: !
// Operator Logical : &&, ||
if ((angka > 5 || angka <= 10) && (angka < 100 && angka > 0)) {
  console.log('double kriteria', angka);
}

console.log('new angka', newAngka);


