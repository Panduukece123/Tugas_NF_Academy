import {
  index,
  store,
  destroy,
} from "./controller/controller.js";

const main = () => {
  index();
  store({ nama: "Budi", umur: 25, alamat: "Jakarta" });
  store({ nama: "Leon", umur: 30, alamat: "Jakarta" });
  index();
  destroy();
};
main();
