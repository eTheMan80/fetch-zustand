import React from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import PropertyCard from "./PropertyCard"

const property: PropertyProps = {
  id: "1",
  title: "Very Lovely Apartment",
  description: "A lovely apartment in the city center.",
  price: "1200",
  location: "New York",
  image: "image1.jpg",
}

test("renders property card", () => {
  const { getByText } = render(
    <MemoryRouter>
      <PropertyCard property={property} />
    </MemoryRouter>,
  )
  expect(getByText(/Very Lovely Apartment/i)).toBeInTheDocument()
  expect(
    getByText(/A lovely apartment in the city center./i),
  ).toBeInTheDocument()
  expect(getByText(/1200/i)).toBeInTheDocument()
  expect(getByText(/New York/i)).toBeInTheDocument()
})
