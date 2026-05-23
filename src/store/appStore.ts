import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  name: "",
  age: null,
  gender: "",
};

const useAppStore = create(
  persist(
    (set) => ({
      ...initialState,
      setUser: (name: string, age: number, gender: string) => {
        set({
          name,
          age,
          gender,
        });
      },
      clearStore: () => {
        set(initialState);
      },
    }),
    {
      name: "app-store",
    },
  ),
);

export default useAppStore;

// create() -> persist() -> set() -> initialState, setterfunctions
