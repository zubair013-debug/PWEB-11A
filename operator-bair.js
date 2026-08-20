// 3 jenis operator

// unar operator ==> operator yang memiliki satu operan

typeof "Dicoding"
// fungsinya untuk mengatahui tipe data operan


// binary operator ==> operator yang memiliki 3 operan
4 + 5;
10 / 2;
5 * 4;

// ternary operator ==> operator yang memiliki 3 operan

// menggunakan operator if else
let ageAhmad = 15;
let maxAge = 18;

if (ageAhmad <= maxAge ) {
    console.log("maaf anda belum layak untuk menonton film ini");
} else {
    console.log("anda bisa menontonnya");
}

// menggunakan ternary

(ageAhmad <= maxAge) ? "maaf anda belum layak untuk menontonya" : "selemata menonton sepuasnya";

// assigment operator : menginisiasi nilai dan memperbaiki
console.info("operator assiment");
let variabel = 90;  
console.log(variabel); // 90

variabel = 40;
console.log(variabel); // 40

// operator aricmatika tambahan 
// incremen (++)
var x = 50;

console.info("operator aritmatika: incrament") ;// untuk menambah 1 nilai dari vaariabel 
console.log(x++); // di tambahkan 1 di setiap kondisi atau variabel
console.log(x++); // 51
console.log(x++);
console.log(x++);

// dwcrement (--)
var z = 100;
console.info("operator aritmatika: decrement");  // untuk menurangi 1 nilai dari variabel to' tidak untuk ekspresi
console.log(z--);
console.log(z--);

console.log(z--);
console.log(z--);

// eksponansial (**), harus ada 2 operan
var c = 4;
console.info("operator aritmatika: eksponansial");
console.log( c ** 3); //16
console.log(c ** c); // 256

// oparasi modulus (%)
let last2 = 10;
let last1 = 20;
var modulus = last2 % last1 ;
console.info("oparasi modulus (%) ");
console.log(modulus);



// OPERASI COMPARISON / operasi perbandingan ==> membandingkan dua nilai dan mengembaikan 2 nilai (true/false)

// sama dengan (==) ==> untuk mebandingkan kedua operan apakah nilainya sama tanpa membandingkan tipe data nya
console.info("comparison operator");
let a = 10;
let b = '10';
let isAwqualB = a == b ;/// true

console.info("operator sama (==)");
console.log(isAwqualB);

// tidak sama (!=) ==> untuk membandingkan kedua operan apakah ulainya sama dan jmuga tipe datanya
console.info("operator tidak sama (!=)");
let isANotEqualB = a != b; // false
console.log(isANotEqualB)

// identik (===) ==>  untuk membandingkan ke dua operan apakah nilainya sama dan juga tipedatanya
console.info("operator identik (===)");
let d = 10 ;
let e = '20';
let isDequalE = d === e;
console.log(isDequalE);

// tidak identik (!==) ==> untuk membandingkan dua operan apakah nilainya tidak sama dan juga tipe data nya
console.info("operator tidak identik (!==)");
let p = 10;
let o = '20';
let isPequalO = p !== o;
console.log(isPequalO)

// lebih dari (>) ==> membandingkan dua operan, apakah operan pertama lebih dari operan ke dua 
let operan1 = 20;
let operan2 = 30;
console.info("operator lebih dari (>)");
console.log(operan1 > operan2);

// kurang dari (<) ==. membandingkan dua operan, apakah opean pertama lebih kecil dari  operan yang ke dua
console.info(" operator kurang dari ");
console.log(operan1 < operan2);

// lebih dari atau sama dengan (>=) ==> membandingkan dua operan, apakah operan pertama lebih dari atau sama dengan operan ke dua
console.info(" operator lebih dari atau sama dengan ");
console.log(operan1 >= operan2);

// kurang dari atau sama dengan (<=) ==> membandingkan dua operan, apakah operan pertama kurang dari atau sama dengan operan ke dua
console.info(" operator kurang dari atau sama dengan");
console.log( operan1 <= operan2);

//Operator logika digunakan untuk menetapkan logika dari dua nilai operan boolean. Denganoperator logika, kita bisa melakukan operasi gerbang logika, seperti AND dan OR. Operatorlogika dapat digunakan untuk menetapkan logika yang lebih kompleks.Berikut adalah daftar operator logika yang tersedia dalam JavaScript


// Binary operator yang menghasilkan nilai true apabila kedua operan bernilai true (atau truthy). Jika salah satu operan bernilai false (atau falsy), operasi akan mengembalikan false
// AND
console.info("operator AND (&&)");
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true

// binary operator yang menghasilkan nilaitrue apabila salah satu operan bernilai true(atau truthy). Jika kedua operan bernilaifalse (atau falsy), operasi akanmengembalikan false
// OR
console.info("oprator OR ||")
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true

//Unary operator yang mengubah operanbernilai true menjadi false dan false
// NOT
console.log(!true); // false
console.log(!false); // true


// STRING OPERATOR
//Operator string adalah operator yang digunakan untuk menggabungkan dua nilai string.Operator ini menggunakan simbol + dan termasuk dalam kategori binary operator
const first = 'bekerja';
const second = 'sama ';
const marge = first + second;
console.info("operator stirng ");
console.log(marge); // output berkerja sama 
