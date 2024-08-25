import React from "react"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const propertyValues = {
    id: property.id,
    title: property.title,
    image: property.image,
    description: property.description,
    price: property.price,
    location: property.location,
  }
  return (
    <div className="property-card">
      <Link to={`/property/${property.id}`} state={propertyValues}>
        <Card sx={{ margin: "5px" }}>
          <CardContent>
            <Box sx={{ width: "100%" }}>
              <picture>
                <source
                  srcSet={`/assets/${property.image}`}
                  type="image/jpeg"
                />
                <img src={`/assets/${property.image}`} alt={property.title} />
              </picture>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography noWrap variant="h3" component="h2" gutterBottom>
                {property.title}
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography noWrap variant="h5" component="p" gutterBottom>
                {property.description}
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h5" component="p" gutterBottom>
                £{property.price}
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography variant="h5" component="p" gutterBottom>
                {property.location}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}

export default PropertyCard
