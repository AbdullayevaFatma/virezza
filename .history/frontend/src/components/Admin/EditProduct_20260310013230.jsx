import { useState } from "react"

const EditProduct = () => {
  const [productData,setProductData] = useState({
    name:"",
    description:"",
    price:0,
    countInStock:0,
    sku:"",
    category:"",
    brand:"",
    sizes:[],
    colors:[],
    collections:"",
    material:{},
    gender:"",
    images:[
      {
        url:"https://picsum.photos/500/500?random=1"
      },
      {
        url:"https://picsum.photos/500/500?random=2"
      }
    ]
  })
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form>
        <div className="mb-6">
          <label htmlFor=""></label>
        </div>
      </form>
    </div>
  )
}

export default EditProduct