// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?

let kullaniciSayi = prompt("Bir sayı girin:");
let sayiCevap = Number(kullaniciSayi);

if (isNaN(sayiCevap)) {
    console.log("Geçersiz sayı!");
} else if (sayiCevap > 0) {
    console.log("Pozitif sayı");
} else if (sayiCevap < 0) {
    console.log("Negatif sayı");
} else {
    console.log("Sayı sıfırdır.");
}