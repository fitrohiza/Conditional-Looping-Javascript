let angka1 = 10;
let angka2 = 8;

if (angka1 < angka2) {
  console.log (`Angka ${angka1} lebih kecil dari ${angka2}`);
} else if (angka1 === angka2) {
  console.log (`Angka ${angka1} sama dengan ${angka2}`);
} else {
  console.log (`Angka ${angka1} lebih besar dari ${angka2}`);
}

let hari = 1;
switch(hari){
    case 1: {
        console.log("Minggu"); break
    }case 2: {
        console.log("Senin"); break
    }case 3: {
        console.log("Selasa"); break
    }case 4: {
        console.log("Rabu"); break
    }case 5: {
        console.log("Kamis"); break
    }case 6: {
        console.log("Jum'at"); break
    }default: {
        console.log("Sabtu");
    }
}

let btn = "UP";
switch(btn){
    case "UP": {
        console.log("Karakter berjalan ke atas"); break
    }case "RIGHT": {
        console.log("Karakter berjalan ke kanan"); break
    }case "LEFT": {
        console.log("Karakter berjalan ke kiri"); break
    }default: {
        console.log("Karakter berjalan ke bawah");
    }
}