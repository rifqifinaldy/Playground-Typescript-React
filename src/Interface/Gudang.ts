export interface Gudang {
  // Object Barang
  barang: {
    nama: string;
    harga: number;
    tersedia: boolean;
    jenis: number;
  }[];

}

export interface Rak {
  // Object Rak
  rak: {
    id_rak: number | string;
    kode_rak: string;
    jenis: number;
    rak : Gudang['barang'];
  }[];
}
