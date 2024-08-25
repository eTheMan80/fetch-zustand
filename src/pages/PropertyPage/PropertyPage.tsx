import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"

const PropertyPage = () => {
  const { state } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <div className="property-page">
      <Box sx={{ width: "100%", margin: "24px 0 0 24px" }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">{state.title}</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ width: "100%", margin: "36px 0 0", textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {state.title}
        </Typography>
      </Box>
      <Box sx={{ width: "50%", margin: "0 auto" }}>
        <picture>
          <source srcSet={`/assets/${state.image}`} type="image/jpeg" />
          <img src={`/assets/${state.image}`} alt={state.title} />
        </picture>
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "36px auto 0",
          padding: "0 0 36px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" component="p" gutterBottom>
          {state.description}
        </Typography>
      </Box>
    </div>
  )
}

export default PropertyPage
