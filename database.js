var supermarket=[
    {
        nama: "Kaos",
        harga: 10000,
        kategori: "fashion"
    },
    {
        nama: "jaket",
        harga: 12000,
        kategori: "fashion"
    },
    {
        nama: "topi",
        harga: 18000,
        kategori: "fashion"
    },
    {
         nama: "bawang",
        harga: 6000,
        kategori: "makanan"
    },
    {
         nama: "cabe",
         harga: 2500,
         kategori: "makanan"
    }
]

// console.log(supermarket[0])

// penampung nilai = variabel
var keranjang = [];

for (let i = 1; i <= supermarket.length; i++) {
    if (supermarket[i-1].harga < 12000) {
      console.log(supermarket[i-1])
      keranjang.push(supermarket[i-1]);
    }
}
console.log(keranjang)