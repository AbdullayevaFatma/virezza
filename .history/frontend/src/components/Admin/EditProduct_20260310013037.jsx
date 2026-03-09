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
    ]
  })
  return (
    <div>EditProduct</div>
  )
}

export default EditProduct