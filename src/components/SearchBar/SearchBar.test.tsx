import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SearchBar from "./SearchBar"

test("calls onSearch with input value when enter keyboard is pressed", async () => {
  const handleSearch = jest.fn()
  const { getByPlaceholderText } = render(<SearchBar onSearch={handleSearch} />)
  const input = getByPlaceholderText(/Search for properties/i)

  await userEvent.type(input, "apartment")
  await userEvent.keyboard("{enter}")

  expect(handleSearch).toHaveBeenCalledWith("apartment")
  expect(input).toHaveValue("apartment")
})
