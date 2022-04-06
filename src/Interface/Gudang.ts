export interface Gudang {
  // Object Barang
  barang: {
    nama: string;
    harga: number;
    tersedia: boolean;
    jenis: number;
  }[];
  // Object Rak
  rak: {
    id_rak: number | string;
    kode_rak: string;
    jenis: number;
  }[];
}
