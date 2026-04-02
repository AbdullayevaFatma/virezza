
import Acc from "../../assets/acc-categories.avif"
const categories = [
  {
    title: "Ready-to-Wear",
    img: "https://via.placeholder.com/300x400?text=Ready-to-Wear",
  },
  {
    title: "Bags",
    img: "https://via.placeholder.com/300x400?text=Bags",
  },
  {
    title: "Shoes",
    img: "https://via.placeholder.com/300x400?text=Shoes",
  },
  {
    title: "Fashion Jewellery",
    img: "https://via.placeholder.com/300x400?text=Fashion+Jewellery",
  },
  {
    title: "Accessories",
    img: "https://via.placeholder.com/300x400?text=Accessories",
  },
  {
    title: "Small Leather Goods",
    img: "https://via.placeholder.com/300x400?text=Small+Leather+Goods",
  },
];

const Categories = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Sekmeler */}
      <div className="flex mb-6">
        <button className="px-6 py-2 font-semibold border-b-2 border-black">
          Women
        </button>
        <button className="px-6 py-2 font-semibold border-b-2 border-transparent text-gray-500">
          Men
        </button>
      </div>

      {/* Kategori kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center font-medium">{cat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;