import { useState, ChangeEvent, KeyboardEvent } from "react"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import { Search } from "@mui/icons-material/"
import { useDebounce } from "../../hooks/useDebounce"

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("")
  const debouncedSearch = useDebounce(query, 500)

  const handleSearch = (ev: ChangeEvent<HTMLInputElement>) => {
    setQuery(ev.target.value)
  }
  const searchProducts = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      onSearch(debouncedSearch)
    }
  }

  return (
    <div className="search-bar">
      <FormControl sx={{ width: "100%" }} variant="standard">
        <Input
          id="search-field"
          data-testid="search-field"
          value={query}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          placeholder="Search for properties.."
          onChange={handleSearch}
          onKeyUp={searchProducts}
        />
      </FormControl>
    </div>
  )
}

export default SearchBar
