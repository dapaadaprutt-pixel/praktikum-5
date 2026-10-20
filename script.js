
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}

function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

document.getElementById("formNilai").addEventListener("submit", function(event) {
    event.preventDefault();

    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const uas = Number(document.getElementById("uas").value);

    const hasil = document.getElementById("hasilNilai");

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus berada pada rentang 0–100.";
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);
    const predikat = tentukanPredikat(akhir);
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    hasil.innerHTML = `
        <h3>Hasil Perhitungan</h3>
        <p>Nilai Akhir: ${akhir.toFixed(2)}</p>
        <p>Predikat: ${predikat}</p>
        <p>Status: ${status}</p>
    `;
});

function eksperimenAritmetika() {
    const inputA = prompt("Masukkan bilangan pertama:");
    const inputB = prompt("Masukkan bilangan kedua:");

    const a = Number(inputA);
    const b = Number(inputB);

    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

eksperimenAritmetika();

console.log("Tabel Perkalian 7");

for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}

function cekGenap(angka) {
    return angka % 2 === 0;
}

console.log("Apakah 8 genap?", cekGenap(8));
console.log("Apakah 7 genap?", cekGenap(7));

document.getElementById("formValidasi").addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("namaValidasi").value.trim();
    const hasil = document.getElementById("hasilValidasi");

    if (nama === "") {
        hasil.textContent = "Nama tidak boleh kosong!";
    } else {
        hasil.textContent = "Nama berhasil divalidasi: " + nama;
    }
});

function toggleTeks() {
    const teks = document.getElementById("teksRahasia");

    if (teks.style.display === "none") {
        teks.style.display = "block";
    } else {
        teks.style.display = "none";
    }
}
