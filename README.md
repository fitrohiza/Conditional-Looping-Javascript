# TUGAS CONDITIONAL DAN LOOPING

## Table of Contents

- [Looping](#looping)
- [Confirm](#confirm)
- [Kuis](#kuis)

## Looping <a name = "looping"></a>

Pada file looping terdapat 3 buah perulangan :

### Perulangan 1

Terdapat sebuah kode perulangan untuk menampilkan informasi user ke-1 sampai 100 <br>
Penjelasan Kode : <br>
Pada perulangan ini digunakan for loop, dimana terdapat start statement berupa variabel `user` dengan nilai awal 1 diikuti dengan blok kondisi berupa `user <= 100` yang artinya kode perulangan akan diulang selama nilai `user` belum melebihi 100. expresi yang terakhir merupakan _increment_ yaitu menaikan variabel `user` setelah blok kode dijalankan. apabila kondisi bernilai benar maka akan melakukan iterasi dari angka 1 - 100 dengan output `User ke-1` sampai dengan `User ke-100`. Berikut kode lengkapnya :

```javascript
for (let user = 1; user <= 100; user++) {
  console.log("User ke-" + user);
}
```

### Perulangan 2

Terdapat sebuah perulangan untuk menampilkan perulangan 1 sampai 10 dimana setiap kali kode diulang akan ditambahkan dengan nilai 2 <br>
Penjelasan Kode : <br>
Pada perulangan ini dibuatlah sebuah variabel nilai yang valuenya berupa 0 , kemudian pada for loop dibuat start statement berupa variabel `i` dengan nilai awal 1 diikuti dengan blok kondisi berupa `i <= 10` yang artinya kode perulangan akan diulang selama nilai `i` belum melebihi 10. expresi yang terakhir merupakan _increment_ yaitu menaikan variabel `i` setelah blok kode dijalankan. apabila kondisi bernilai benar maka varibel nilai akan ditambah 2. Berikut kode lengkapnya :

```javascript
let nilai = 0;

for (let i = 1; i <= 10; i++) {
  nilai += 2;
  console.log(`Nilai pada perulangan ${i} = ${nilai}`);
}
```

### Perulangan 3

Terdapat sebuah perulangan untuk menampilkan perulangan 0 sampai 20 dimana setiap kali kode dijalankan akan di cek nilainya apakah ganjil atau genap <br>
Penjelasan Kode : <br>
Pada perulangan for loop ini dibuat start statement berupa variabel `i` dengan nilai awal 1 diikuti dengan blok kondisi berupa `i <= 20` yang artinya kode perulangan akan diulang selama nilai `i` belum melebihi 20. expresi yang terakhir merupakan _increment_ yaitu menaikan variabel `i` setelah blok kode dijalankan. apabila kondisi bernilai benar maka akan masuk ke pengkondisian `if`. jika variabel `i % 2 === 0` maka akan menampilkan `${i} adalah bilangan genap` jika tidak maka kode else akan dijalankan yaitu `${i} adalah bilangan ganjil`. Berikut kode lengkapnya :

```javascript
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} adalah bilangan genap`);
  } else {
    console.log(`${i} adalah bilangan genap`);
  }
}
```

## Confirm <a name = "confirm"></a>

Pada file confirm dibuatlah sebuah variabel `count = 0;` dan `ulang = true`. pada block kode `while` kondisi yang dimasukan adalah variabel `ulang` itu berarti perulangan akan selalu dijalankan. Kemudian dibuat sebuah variabel berupa konfirmasi Pop up kepada User menggunakan `confirm()` yang menampilkan konfirmasi berupa

> Apakah anda mau mengulang?

jika pilihan user adalah _OK_ maka akan muncul Pop up yang sama dan jumlah perulangan akan dihitung kedalam variabel `count++`.jika tidak maka perulangan akan dihentikan dengan mengubah nilai variabel `ulang` dari `true` menjadi `false` dan menampilkan jumlah perulangan yang dilakukan dengan memanggil variabel `count`. Berikut kode lengkapnya :

```javascript
let count = 0;
let ulang = true;

while (ulang) {
  let pilihan = confirm("Apakah anda mau mengulang?");
  if (pilihan) {
    count++;
  } else {
    ulang = false;
    alert(`Perulangan sudah dilakukan sebanyak ${count} kali.`);
  }
}
```

## Kuis <a name = "kuis"></a>

Pada file kuis dibuatlah sebuah variabel `jawaban = "";` untuk menyimpan inputan dari user. Kode prompt digunakan untuk meminta input dari pengguna tentang kepanjangan dari "IB" (Impact Byte) hingga pengguna memberikan jawaban yang benar. Program akan terus meminta input dari pengguna selama pengguna belum memberikan jawaban yang benar yaitu "Impact Byte". Jika jawaban yang diberikan pengguna benar, program akan menampilkan pesan __Selamat jawaban kamu benar__ dengan menggunakan `alert()` dan keluar dari `loop while`. Berikut kode lengkapnya :

```javascript
let jawaban = "";
while (jawaban !== "Impact Byte") {
  jawaban = prompt("Sebutkan kepanjangan dari nama IB (Impact Byte)?");
  if (jawaban === "Impact Byte") {
    alert("Selamat jawaban kamu benar");
  }
}
```
