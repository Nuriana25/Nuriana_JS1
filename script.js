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
  "Selamat anda mendapatkan rezeki hari ini! Silahkan pilih rezeki yang anda dapatkan dengan memasukan salah satu huruf A sampai E"
);
var rezekiyangdidapat = "";
switch (jawab) {
  case "A":
    rezekiyangdidapat = "membuat tugas desain";
    break;
  case "B":
    rezekiyangdidapat = "membuat tugas teknikal";
    break;
  case "C":
    rezekiyangdidapat = "membuat tugas profesional";
    break;
  case "D":
    rezekiyangdidapat = "libur";
    break;
  case "E":
    rezekiyangdidapat = "memperbaiki tugas sesi macro";
    break;
  default:
    document.write("<p>Maaf! Pilihan anda salah</p>");
}
if (rezekiyangdidapat === "") {
  document.write("<p>anda gagal mendapat rezeki hari ini</p>");
} else {
  document.write(
    "<h2>Selamat anda mendapatkan rezeki berupa " + rezekiyangdidapat + "</h2>"
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

document.write("Perulangan sudah dilakuakn sebanyak " + counter + " kali");

// contoh program javascript menggunakan function
