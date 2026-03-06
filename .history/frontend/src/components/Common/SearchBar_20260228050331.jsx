import { useState } from "react"

const SearchBar = () => {

  const [searchTerm,setSearchTerm] = useState("")
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div>SearchBar</div>
  )
}

export default SearchBar