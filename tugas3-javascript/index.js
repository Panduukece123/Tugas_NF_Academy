let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },

  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },

  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

const tampilkanProduk = () => {
  const tbody = document.getElementById("data-body");
  tbody.innerHTML = "";

  produkToko.forEach((produk, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${produk.nama}</td>
        <td>Rp${produk.harga.toLocaleString()}</td>
        <td>${produk.stok}</td>
        <td>
        <button class="btn btn-danger btn-sm" onclick="hapusProduk(${
          produk.id
        })">Hapus</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
};

const tambahProduk = (nama, harga, stok) => {
  const id = produkToko.length + 1;
  const produkBaru = { id, nama, harga, stok };
  produkToko.push(produkBaru);
  tampilkanProduk();
};

const hapusProduk = (id) => {
  const index = produkToko.findIndex((produk) => produk.id === id);
  if (index !== -1) {
    produkToko.splice(index, 1);
    tampilkanProduk();
  } else {
    console.log("Produk tidak ditemukan");
  }
};

document.getElementById("form-produk").addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const harga = parseInt(document.getElementById("harga").value);
  const stok = parseInt(document.getElementById("stock").value);
  tambahProduk(nama, harga, stok);
  e.target.reset();
});

tampilkanProduk();
