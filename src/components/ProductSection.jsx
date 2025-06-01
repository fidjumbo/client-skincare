import React from "react";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";

const products = [
  { id: 1, name: "Glow Oil", price: "₦5,000", image: product1 },
  { id: 2, name: "Face Cleanser", price: "₦3,500", image: product2 },
  { id: 3, name: "Body Butter", price: "₦4,200", image: product3 },
  { id: 4, name: "Toner", price: "₦2,800", image: product4 },
  { id: 5, name: "Exfoliating Scrub", price: "₦6,000", image: product5 },
  { id: 6, name: "Moisturizer", price: "₦4,700", image: product6 },
];

const ProductSection = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-20 bg-pink-50" id="products">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">Our Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col items-center p-3"
          >
            <div className="w-full h-36 sm:h-40 md:h-52 mb-2 overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <h3 className="text-sm font-semibold text-gray-800 text-center">{product.name}</h3>
            <p className="text-pink-600 text-sm text-center mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
