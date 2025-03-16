import React from 'react';
import { Link } from 'react-router-dom';
import bibit from '../assets/bibit.jpg'
import { FaLeaf, FaShoppingBasket, FaUserCheck, FaStar, FaSeedling, FaSmile, FaArrowRight, FaTruck, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-green-50">
      
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center bg-green-700 text-white px-6">
        <h1 className="text-2xl lg:text-5xl font-extrabold mb-4 flex items-center animate-fadeIn">
          <FaLeaf className="mr-3" /> Selamat Datang di <span className="text-yellow-300 ml-2">BitShop</span>
        </h1>
        <p className="text-lg max-w-2xl animate-fadeInSlow">
          Temukan bibit tanaman terbaik untuk kebun impian Anda. Kami menyediakan berbagai macam bibit berkualitas dengan harga terbaik!
        </p>
        <Link to="/product" className="mt-6 bg-white text-green-600 px-6 py-3 rounded-full font-semibold flex items-center hover:bg-gray-200 transition animate-fadeInSlow">
          Jelajahi Produk <FaArrowRight className="ml-2" />
        </Link>
      </section>

      {/* Keunggulan BitShop */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-green-700 flex justify-center items-center">
          <FaStar className="mr-2 text-yellow-400" /> Mengapa Memilih BitShop?
        </h2>
        <p className="text-gray-600 mt-2">Kami menyediakan bibit berkualitas terbaik dengan layanan yang memuaskan.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="p-8 bg-green-100 shadow-md rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaSeedling className="text-green-600 text-5xl mb-3" />
            <h3 className="text-2xl font-bold text-green-600">Bibit Berkualitas</h3>
            <p className="mt-2 text-gray-700 text-center">Setiap bibit telah melalui seleksi ketat untuk hasil pertumbuhan yang optimal.</p>
          </div>
          <div className="p-8 bg-green-100 shadow-md rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaShoppingBasket className="text-green-600 text-5xl mb-3" />
            <h3 className="text-2xl font-bold text-green-600">Harga Terjangkau</h3>
            <p className="mt-2 text-gray-700 text-center">Kami menawarkan harga terbaik untuk bibit unggul, cocok untuk segala kebutuhan.</p>
          </div>
          <div className="p-8 bg-green-100 shadow-md rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaUserCheck className="text-green-600 text-5xl mb-3" />
            <h3 className="text-2xl font-bold text-green-600">Panduan & Dukungan</h3>
            <p className="mt-2 text-gray-700 text-center">Kami menyediakan tips dan panduan dalam merawat tanaman agar tumbuh dengan maksimal.</p>
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-16 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-700 flex justify-center items-center">
          <FaShoppingBasket className="mr-2 text-yellow-400" /> Produk Unggulan Kami
        </h2>
        <p className="text-gray-600 mt-2">Lihat beberapa bibit unggulan yang paling diminati pelanggan.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-6 px-6">
          {["Mangga", "Alpukat", "Jeruk", "Pepaya", "cabai"].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden w-64 transform transition duration-300 hover:scale-105">
              <img src={bibit} alt={`Bibit ${item}`} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-700">Bibit {item}</h3>
                <p className="text-gray-600 mt-1">Tumbuh cepat dan menghasilkan buah berkualitas tinggi.</p>
                <Link to="/product" className="mt-3  text-green-600 font-semibold flex items-center justify-center hover:underline">
                  Lihat Detail <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni Pelanggan */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-green-700 flex justify-center items-center">
          <FaSmile className="mr-2 text-yellow-400" /> Apa Kata Pelanggan Kami?
        </h2>
        <p className="text-gray-600 mt-2">Testimoni dari pelanggan setia yang telah membeli bibit di BitShop.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-6 px-6">
          {[
            { nama: "Rina", kota: "Jakarta", review: "Bibit sangat berkualitas! Saya berhasil menanam mangga dengan mudah." },
            { nama: "Andi", kota: "Bandung", review: "Pelayanan BitShop sangat baik dan responsif. Saya pasti akan membeli lagi!" }
          ].map((testi, index) => (
            <div key={index} className="p-6 bg-green-100 shadow-md rounded-lg w-72 flex flex-col items-center">
              <p className="text-gray-700 text-center">{`"${testi.review}"`}</p>
              <h4 className="mt-3 font-semibold text-green-600">- {testi.nama}, {testi.kota}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white text-center">
  <h2 className="text-3xl font-bold">Siap Memulai Berkebun?</h2>
  <p className="mt-2 text-lg">Temukan berbagai jenis bibit unggulan yang sesuai dengan kebutuhan Anda.</p>
  <div className="mt-6 inline-block">
    <Link 
      to="/product" 
      className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold inline-flex items-center justify-center hover:bg-gray-200 transition"
    >
      Lihat Produk Kami <FaArrowRight className="ml-2" />
    </Link>
  </div>
</section>

      
    </div>
  );
};

export default Home;
