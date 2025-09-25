import users from "../data.js";

//tampilkan data
const index = () => {
  //menampilkan data
  console.log("============Menampilkan data================");
  users.map(({ nama, umur, alamat }) => {
    console.log(`Nama: ${nama}, Umur: ${umur}, Alamat: ${alamat}`);
  });
};

//tambahkan data
const store = (user) => {
  //tambahkan data
  users.push(user);
  console.log("===============Data berhasil ditambahkan=========");
  index();
};

//hapus data
const destroy = () => {
  //hapus data
  users.pop();
  console.log("==========Data berhasil dihapus============");
  index();
};

export { index, store, destroy };
