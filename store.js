import create from "zustand";

const useStore = create((set) => ({
  gridData: Array.from({ length: 1000 }, () => ""),
  setGridData: (index, value) =>
    set((state) => {
      const newGridData = [...state.gridData];
      newGridData[index] = value;
      return { gridData: newGridData };
    }),
}));

export default useStore;
