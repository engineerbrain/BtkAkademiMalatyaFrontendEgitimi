// ÖDEV-1 
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())


/*--------ÇÖZÜMLER-------*/


let userData = prompt("Lütfen bir şeyler yazınız");

// S-1) Kaç karakterlidir? (length)
console.log("1) Karakter Sayısı:", userData.length);

// S-2) Boşluklar alınarak kaç karakterlidir? (trim)
console.log("2) Boşluklar Alındıktan Sonraki Karakter Sayısı:", userData.trim().length);

// S-3) Bütün kelimeyi küçük harfle göstermek (toLowerCase())
console.log("3) Küçük Harfle Gösterilen Kelime:", userData.toLowerCase());

// S-4) Bütün kelimeyi büyük harfle göstermek (toUpperCase())
console.log("4) Büyük Harfle Gösterilen Kelime:", userData.toUpperCase());

// S-5) Kullanıcıdan alınan ilk kelimeyi "javascript" kelimesiyle değiştirin (replace, substring, indexOf)
console.log("5) Değiştirilen Kelime:", userData.replace(userData.substring(0, userData.indexOf(" ")), "javascript"));

// S-6) Yazdığınız kelimede "javascript" ile mi başlıyor? (startsWith())
console.log("6) 'javascript' ile Başlıyor mu?", userData.startsWith("javascript"));

// S-7) Yazdığınız kelimede "javascript" ile mi bitiyor? (endsWith())
console.log("7) 'javascript' ile Bitiyor mu?", userData.endsWith("javascript"));

// S-8) İlk harf nedir? (charAt())
console.log("8) İlk Harf:", userData.charAt(0));

// S-9) Girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
console.log("9) Yeni Kelime:", userData.concat("-ben js öğreniyorum"));

// S-10) Girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (substring())
console.log("10) 0 ile 4 Arasındaki Index:", userData.substring(0, 5));
