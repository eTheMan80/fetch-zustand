import React from "react"
import Grid from "@mui/material/Unstable_Grid2"
import PropertyCard from "../PropertyCard"

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="property-list">
      <Grid container spacing={2}>
        {properties?.map((property) => (
          <Grid
            key={property.id}
            xs={4}
            sx={{
              flex: "1 0 auto",
              alignItems: "stretch",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default PropertyList
