import { Link } from "react-router-dom";
import hero from "../../assets/hero.avif";

const FeaturedCollection = () => {
  const collections = [
    { title: "New Saint Laurent", img: hero, link: "/collections/saint-laurent" },
    { title: "Dresses", img: hero, link: "/collections/dresses" },
  ];

  return (
    <section className="py-12 px-4 lg:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((col) => (
          <div key={col.title} className="relative group overflow-hidden">
            {/* Görsel */}
            <img
              src={col.img}
              alt={col.title}
              className="w-full h-96 object-cover"
            />

            {/* Yazı ve Buton alt kısımda */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center px-4">
              <h2 className="text-white text-2xl lg:text-3xl font-semibold mb-4 drop-shadow-lg">
                {col.title}
              </h2>
              <Link
                to={col.link}
                className="bg-white text-black px-6 py-2 font-medium "
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;