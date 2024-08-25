import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import PropertyList from "../../components/PropertyList"
import SearchBar from "../../components/SearchBar"
import "../../App.css"
import { getProperty } from "../../services/api/property"
import { usePropertyStore } from "../../services/store/propertyStore"

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("")
  const setProperty = usePropertyStore((state) => state.setProperty)
  const { data: properties, isLoading } = useQuery({
    queryKey: ["property", { search }],
    queryFn: () => getProperty(search),
  })

  const getpropertyList = (search: string) => {
    return properties?.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase()),
    )
  }

  const handleSearch = async (query: string) => {
    const propertyListSearch = getpropertyList(query)
    await new Promise((resolve) => setTimeout(resolve, 800))
    if (query.trim() === "") {
      setProperty(properties)
      setSearch("")
    } else {
      setProperty(propertyListSearch)
      setSearch(query)
    }
  }

  useEffect(() => {
    if (properties) {
      setProperty(properties)
    }
    // eslint-disable-next-line
  }, [properties])

  return (
    <div className="App">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          List of properties
        </Typography>
      </Box>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <div>Loading...</div>}
      {!isLoading && <PropertyList properties={properties} />}
    </div>
  )
}

export default App
