


selectedProduct={
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "Perfect for any location",
  brand: "Zara",
  material: "Leather",
  sizes:["S","M","L","XL"],
  colors:["Red","Black"],
  images:[
    {
      url:"https://picsum.photos/500/500?random=1"
    }
  ]
}
const ProductDetail = () => {
  return (
    <div className="p-6">
<div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
  <div className="flex flex-col md:flex-row">
    <div className="hidden md:flex flex-col space-y-4 mr-6"></div>
  </div>
</div>
    </div>
  )
}

export default ProductDetail