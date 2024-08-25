import useStore from "./store";

const Grid = () => {
  const { gridData, setGridData } = useStore();

  const handleCellChange = (index, value) => {
    setGridData(index, value);
  };

  return (
    <div className="grid grid-cols-10 gap-1 p-4">
      {gridData.map((cell, index) => (
        <input
          key={index}
          value={cell}
          onChange={(e) => handleCellChange(index, e.target.value)}
          className="border p-2"
        />
      ))}
    </div>
  );
};

export default Grid;
