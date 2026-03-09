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
    <div className="max-w-5xl mx-auto p-6 p"></div>
  )
}

export default EditProduct