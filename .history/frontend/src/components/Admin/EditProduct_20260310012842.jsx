import { useState } from "react"

const EditProduct = () => {
  const [productData,setProductData] = useState({
    name:"",
    description:"",
    price:0
  })
  return (
    <div>EditProduct</div>
  )
}

export default EditProduct