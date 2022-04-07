import { useState } from "react";
import "./App.css";
import AddToList from "./Components/AddToList";
import Card from "./Components/Card";
import ClassComponent from "./Components/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent";
import { Gudang } from "./Interface/Gudang";

function App() {
  const [barang, setBarang] = useState<Gudang["barang"]>([
    {
      nama: "Apel",
      harga: 25000,
      tersedia: true,
      jenis: 3,
    },
    {
      nama: "Kardus",
      harga: 15000,
      tersedia: false,
      jenis: 2,
    },
  ]);

  return (
    <div className="App">
      {/* <h1>Gudang</h1>
      <AddToList barang={barang} setBarang={setBarang}/>
      <Card barang={barang} /> */}
      {/* <ClassComponent namaHalaman="Halaman 1" title="Title : Class Component"/>
      <FunctionalComponent title="This Has a child">
        Ini Children
      </FunctionalComponent> */}
      <FunctionalComponent title="Title : Functional Component"/>
    </div>
  );
}

export default App;
