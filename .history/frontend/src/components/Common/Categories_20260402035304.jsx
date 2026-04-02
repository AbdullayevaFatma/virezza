import Acc from "../../assets/acc-categories.avif";

const categories = [
  { title: "Ready-to-Wear", img: Acc },
  { title: "Bags", img: Acc },
  { title: "Shoes", img: Acc },
  { title: "Fashion Jewellery", img: Acc },
  { title: "Accessories", img: Acc },
  { title: "Small Leather Goods", img: Acc },
];

const Categories = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Sekmeler */}
      <div className="flex mb-6 gap-4">
        <button className="px-6 py-2 font-semibold bg-black text-white rounded">
          Women
        </button>
        <button className="px-6 py-2 font-semibold border border-gray-300 rounded">
          Men
        </button>
      </div>

      {/* Kategori Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="flex flex-col items-center">
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-72 object-cover"
            />
            <p className="mt-4 text-center font-medium">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;