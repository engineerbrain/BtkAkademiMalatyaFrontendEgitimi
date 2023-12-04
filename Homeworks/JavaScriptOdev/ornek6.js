// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım


let password = prompt("Şifre girin:");
let repassword = prompt("Şifreyi tekrar girin:");

if (password === repassword) {
    console.log("Şifreler eşleşiyor.");
} else {
    console.log("Şifreler eşleşmiyor.");
}
