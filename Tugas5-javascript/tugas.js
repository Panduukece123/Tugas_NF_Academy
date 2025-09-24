// Data Produk
let produkList = [
  { id: 1, nama: "Laptop", harga: 1200000 },
  { id: 2, nama: "Smartphone", harga: 500000 },
  { id: 3, nama: "TV", harga: 1000000 },
  { id: 4, nama: "Kipas", harga: 100000 },
  { id: 5, nama: "Kulkas", harga: 400000 },
];

const eventHandler = {
  init: function () {
    let button = document.getElementById("myButton");

    button.addEventListener("click", function () {
      alert("Tombol diklik dengan addEventListener!");
    });

    button.addEventListener("mouseover", function () {
      console.log("Mouse over pada tombol!");
    });

    let ubahWarnaButton = document.getElementById("ubahWarna");

    ubahWarnaButton.addEventListener("click", function () {
      document.body.style.backgroundColor = "red";
    });

    ubahWarnaButton.addEventListener("dblclick", function () {
      document.body.style.backgroundColor = "blue";
    });
  }
};

// panggil fungsi init sekali saja
eventHandler.init();


// Menambahkan produk dengan spread operator
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...ids) {
  produkList = produkList.filter((produk) => !ids.includes(produk.id));
  return produkList;
}

// Menampilkan produk dengan destructuring
function tampilkanProduct() {
  console.log(`=======Menampilkan List Data Produk=======`);
  for (const { id, nama, harga } of produkList) {
    console.log(`Produk ke : ${id}`);
    console.log(`Nama Elektronik : ${nama}`);
    console.log(`Harga Produk : ${harga}`);
    console.log("---------------------------");
  }
}

// contoh penggunaan
tampilkanProduct();
tambahProduk(6, "Tablet", 7000000);
tampilkanProduct();
hapusProduk(2);
tampilkanProduct();
