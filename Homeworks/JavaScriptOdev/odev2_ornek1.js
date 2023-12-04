// ÖDEV -2 
//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?


/*-----function, var-----*/


function hesaplaY(x, k) {
    var sonuc = 3 * x + 4 * k;
    console.log("Sonuç (function, var):", sonuc);
}

var xDegeri = prompt("x değerini girin:");
var kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));



/*-----function, let-----*/


function hesaplaY(x, k) {
    let sonuc = 3 * x + 4 * k;
    console.log("Sonuç (function, let):", sonuc);
}

let xDegeri = prompt("x değerini girin:");
let kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));



/*-----function, const-----*/


function hesaplaY(x, k) {
    const sonuc = 3 * x + 4 * k;
    console.log("Sonuç (function, const):", sonuc);
}

const xDegeri = prompt("x değerini girin:");
const kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));



/*-----anonymous, var-----*/


var hesaplaY = function(x, k) {
    var sonuc = 3 * x + 4 * k;
    console.log("Sonuç (anonymous, var):", sonuc);
};

var xDegeri = prompt("x değerini girin:");
var kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));



/*-----anonymous, let-----*/


let hesaplaY = function(x, k) {
    let sonuc = 3 * x + 4 * k;
    console.log("Sonuç (anonymous, let):", sonuc);
};

let xDegeri = prompt("x değerini girin:");
let kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));



/*-----anonymous, const-----*/


const hesaplaY = function(x, k) {
    const sonuc = 3 * x + 4 * k;
    console.log("Sonuç (anonymous, const):", sonuc);
};

const xDegeri = prompt("x değerini girin:");
const kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));



/*-----arrow, var-----*/


var hesaplaY = (x, k) => {
    var sonuc = 3 * x + 4 * k;
    console.log("Sonuç (arrow, var):", sonuc);
};

var xDegeri = prompt("x değerini girin:");
var kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));



/*-----arrow, let-----*/


let hesaplaY = (x, k) => {
    let sonuc = 3 * x + 4 * k;
    console.log("Sonuç (arrow, let):", sonuc);
};

let xDegeri = prompt("x değerini girin:");
let kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));



/*-----arrow, const-----*/


const hesaplaY = (x, k) => {
    const sonuc = 3 * x + 4 * k;
    console.log("Sonuç (arrow, const):", sonuc);
};

const xDegeri = prompt("x değerini girin:");
const kDegeri = prompt("k değerini girin:");
hesaplaY(Number(xDegeri), Number(kDegeri));