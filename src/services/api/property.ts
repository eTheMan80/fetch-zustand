import data from "../api/data.json"

export async function getProperty(query = ""): Promise<PropertyProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const filteredProperties = data.properties.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase()),
  )

  return [...filteredProperties]
}
