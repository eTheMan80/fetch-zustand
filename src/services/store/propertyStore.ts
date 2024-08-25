import { create } from "zustand"

type PropertyStore = {
  property?: PropertyProps[]
  setProperty: (property?: PropertyProps[]) => void
}

export const usePropertyStore = create<PropertyStore>((set) => ({
  property: [],
  setProperty: (property) => set({ property }),
}))
