// contoh program javascript menggunakan if dan else
let NamakamuNuriana = prompt("Apakah Nama Kamu Nuriana?");
if (NamakamuNuriana === "iya") {
  alert("Hallo Nuriana");
} else {
  alert("Maaf saya tidak tau");
}

// contoh program javascript menggunakan nested if
let ikutprogramstudyindependengak = prompt(
  "Apakah Kamu Mengikuti Program Study Independen"
);
if (ikutprogramstudyindependengak === "iya") {
  alert("Semangat belajarnya");
} else if (ikutprogramstudyindependengak === "tidak") {
  alert(
    "ohh tidak masalah,tahun depan ikut program study independen kampus mardeka di Infinite Learning yaa"
  );
} else {
  alert("coba di lihat ulang!!");
}

// contoh program javascript menggunakan switch case
var jawab = prompt(
  "Selamat anda mendapatkan kotak misteri hari ini! Silahkan pilih kotak yang mana anda inginkan dengan menulis warna yang anda sukai"
);
var kotakyangdidapat = "";
switch (jawab) {
  case "merah":
    kotakyangdidapat = "mengerjakan tugas desain";
    break;
  case "hitam":
    rezekiyangdidapat = "mengerjakan tugas teknikal";
    break;
  case "biru":
    kotakyangdidapat = "mengerjakan tugas profesional";
    break;
  case "hijau":
    kotakyangdidapat = "libur";
    break;
  case "putih":
    kotakyangdidapat = "memperbaiki tugas sesi macro";
    break;
  default:
    document.write("<p>Maaf! Warna yang anda sukai tidak ada</p>");
}
if (kotakyangdidapat === "") {
  document.write("<p>anda gagal mendapat kotak misteri hari ini</p>");
} else {
  document.write(
    "<h2>Selamat anda mendapatkan kotak misteri berupa " + kotakyangdidapat + "</h2>"
  );
}
// contoh program javascript menggunakan for statement
for (let i = 45; i < 90; i++) {
  document.write("<p>Perulangan ke-" + i + "</p>");
}
// contoh program javascript menggunakan while dan do while
// contoh while
var ulangi = confirm("saya tidak bisa");
var counter = 0;

while (ulangi) {
  counter++;
  ulangi = confirm("saya tidak bisa");
}

document.write("Perulangan sudah dilakukan sebanyak " + counter + " kali");

//contoh do while
var ulangi = confirm("saya akan mencoba ulang");
var counter = 0;

do {
  counter++;
  ulangi = confirm("saya akan mencoba ulang");
} while (ulangi);

document.write("Perulangan sudah dilakukan sebanyak " + counter + " kali");
