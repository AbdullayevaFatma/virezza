import { useState } from "react"

const EditProduct = () => {
  const [productData,setProductData] = useState({
    name:"",
    description:"",
    price:0,
    countInStock:0,
    sku:"",
    
  })
  return (
    <div>EditProduct</div>
  )
}

export default EditProduct