import { useState } from "react"

const SearchBar = () => {

  const [searchTerm,setSearchTerm] = useState("")
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div>{
      isOpen ? (<form></form>):(
        <button></button>
      )
      }</div>
  )
}

export default SearchBar