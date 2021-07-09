

let output = document.querySelector(".output .head h2");
let input = document.querySelector(".input label input");
let btnKirim = document.querySelector(".input .kirim");

btnKirim.addEventListener('click', function () {
  let waktuSekarang = new Date().getTime();
  let tglLahir = input.valueAsNumber;
  let hasil = waktuSekarang - tglLahir;
  let tahun = Math.floor(hasil / 31536000000);
  let bulan = Math.floor(hasil % 31536000000 / 2629746000);
  let hari = Math.floor(hasil % 2629746000 / 86400000);

  output.textContent = tahun + " Tahun, " + bulan + " Bulan, " + hari + " Hari."
  output.style.visibility = "visible";

});

