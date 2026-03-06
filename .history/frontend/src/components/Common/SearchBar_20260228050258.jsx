import { useState } from "react"

const SearchBar = () => {

  const [searchTerm,setSearchTerm] = useState("")
  const [isOpen,setIsOpen] = useState()
  return (
    <div>SearchBar</div>
  )
}

export default SearchBar