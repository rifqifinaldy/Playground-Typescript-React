import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card";
import { Gudang } from "./Interface/Gudang";
import { User } from "./Interface/User";

function App() {
  const [barang, setBarang] = useState<Gudang["barang"]>([]);
  const [rak, setRak] = useState<Gudang["rak"]>([]);
  const [karyawan, setKaryawan] = useState<User["karyawan"]>();

  return (
    <div className="App">
      <h1>Gudang</h1>
      <Card barang={barang}/>
    </div>
  );
}

export default App;
