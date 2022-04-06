import React from "react";

export interface CardProps {
  barang: {
    nama: string;
    harga: number;
    tersedia: boolean;
    jenis: number;
  }[];
}

const Card = (props: CardProps) => {
  return <div>Card</div>;
};

export default Card;
