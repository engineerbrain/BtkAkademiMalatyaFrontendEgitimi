//ÖDEV: Aşağıdaki örnekleri javascript math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 

        
/*--------ÇÖZÜMLER-------*/


// -5.9 sayısının matematik işlemleri
let sayi = -5.9;

// 1. Mutlak değeri al
let mutlakDeger = Math.abs(sayi);
console.log("1. Mutlak Değer:", mutlakDeger);

// 2. Yuvarlama yap
let yuvarlanmisSayi = Math.round(sayi);
console.log("2. Yuvarlanmış Sayı:", yuvarlanmisSayi);

// 3. Kare al
let kare = Math.pow(sayi, 2);
console.log("3. Kare:", kare.toFixed(2));

// 4. Karekök al
let karekok = Math.sqrt(mutlakDeger);
console.log("4. Karekök:", karekok.toFixed(1));

// 5. Yuvarlama yap
let yuvarlanmisSayi2 = Math.ceil(mutlakDeger);
console.log("5. Yuvarlanmış Sayı (yukarı):", yuvarlanmisSayi2);

// 6. Çıkan sonucu 5'e bölelim
let bolum = yuvarlanmisSayi2 / 5;
console.log("6. Bölme Sonucu:", bolum);

// 7. İki sayı arasından karşılaştırma yap ve küçüğünü al
let kucukSayi = Math.min(1, 5);
console.log("7. En Küçük Sayı:", kucukSayi);

// 8. Küçük sayı tekse 3 ekle, çiftse 5 ekle
let sonuc = kucukSayi % 2 === 0 ? kucukSayi + 5 : kucukSayi + 3;
console.log("8. Sonuç:", sonuc);