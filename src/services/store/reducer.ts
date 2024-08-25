import data from "../api/data.json"

type InitialState = {
  properties: PropertyProps[]
}

export const initialState: InitialState = {
  properties: data.properties,
}

export const reducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "LoadProperties":
      return {
        ...state,
        properties: data.properties,
      }
    case "SearchProduct":
      return {
        ...state,
        properties: state.properties.filter(
          (item) =>
            item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            item.location.toLowerCase().includes(action.payload.toLowerCase()),
        ),
      }
    default:
      return state
  }
}
