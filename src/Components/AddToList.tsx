import React, { useState } from "react";
import { Gudang } from "../Interface/Gudang";

interface Items {
  barang: Gudang["barang"];
  setBarang: React.Dispatch<React.SetStateAction<Gudang["barang"]>>;
}

const AddToList: React.FC<Items> = ({barang, setBarang}) => {
  const [input, setInput] = useState({
    nama: "",
    harga: "",
    tersedia: true,
    jenis: 2,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const saveChange = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      if(
          !input.nama || !input.harga
      ) {
          return
      }
      setBarang ([
          ...barang,
          {
            nama: input.nama,
            harga: parseInt(input.harga),
            tersedia: input.tersedia,
            jenis: input.jenis
          }
      ])
  };

  return (
    <form onSubmit={(e)=>saveChange(e)}>
      Add To List Component
      <br />
      <label>Nama Barang : </label>
      <input
        name="nama"
        value={input.nama}
        type="text"
        placeholder="Nama"
        onChange={(e) => handleChange(e)}
      />
      <label>Harga : </label>
      <input
        name="harga"
        value={input.harga}
        type="number"
        placeholder="Harga"
        onChange={(e) => handleChange(e)}
      />
      <label>Tersedia : </label>
      <input
        name="tersedia"
        defaultChecked={input.tersedia}
        type="checkbox"
        onChange={(e) => handleChange(e)}
      />
      <label>Jenis : </label>
      <select
        name="jenis"
        defaultValue={input.jenis}
        placeholder="nama barang"
        onChange={(e) => handleChange(e)}
      >
        <option value={0}>Sandang</option>
        <option value={1}>Pangan</option>
        <option value={2}>Papan</option>
      </select>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddToList;
