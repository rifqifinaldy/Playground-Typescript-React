import React from "react";
import { Gudang } from "../Interface/Gudang";

const Card: React.FC<Gudang> = ({ barang }) => {
  const renderList = (): JSX.Element[] => {
    return barang.map((item, i) => {
      return (
        <li key={i}>
          Barang : {item.nama}, Harga : {item.harga}, Tersedia :{" "}
          {item.tersedia ? "Tersedia" : "Tidak Tersedia"}, Jenis : {item.jenis}
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default Card;
