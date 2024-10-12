import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
const App = () => { 
  const companyLogo = "Masak Apa Hari Ini";
  const products = [
    {
      id: 1,
      name: "Rendang",
      imageUrl: 
      "shutterstock_1416902540_edited-500x300.jpg",
    },
    {
      id: 2,
      name: "Nasi Goreng",
      imageUrl: 
      "src/assets/cara-membuat-nasi-goreng-seafood-500x300.jpg",
    },
    {
      id: 3,
      name: "Nasi Kebuli",
      imageUrl: 
      "Nasi-Kebuli-Kambing-500x300.jpg",
    },
    {
      id: 4,
      name: "Ayam Goreng",
      imageUrl: 
      "ayam-goreng-bawang-putih-500x300.jpg",
    },
    {
      id: 5,
      name: "Mie Goreng",
      imageUrl: 
      "Resep-Mie-Goreng-Telur-Untuk-Tanggal-Tua-500x300.jpg",
    },
  ];
  return (
    <>
      <Navbar logo={companyLogo}/>
      <Banner products={products}/>
    </>
  );
}
export default App;
