import { useState } from "react"
import { HiMagnifyingGlass } from "react-icons/hi2"

const SearchBar = () => {

  const [searchTerm,setSearchTerm] = useState("")
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div>{
      isOpen ? (<form></form>):(
        <button>
          <HiMagnifyingGlass className="h-5 w-4"/>
        </button>
      )
      }</div>
  )
}

export default SearchBar