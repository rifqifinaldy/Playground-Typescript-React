import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [barang, setBarang] = useState([
    {
      nama: "Kardus",
      jumlah: 2,
      tersedia: true,
      keterangan: "Kardus Milik Semua Orang",
    },
    {
      nama: "Kardus Bekas",
      jumlah: 3,
      tersedia: true,
    },
  ]);

  barang.map(barang => {
    barang.jumlah = 4
  })

  console.log(barang)
  return (
    <div className="App">
      <h1>Gudang App</h1>
    </div>
  );
}

export default App;
