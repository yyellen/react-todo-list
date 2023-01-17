import { useRef } from "react";

const Todolist = () => {
  const inputRef = useRef(null);

  const addToList = () => {
    const todoItem = inputRef.current.value;
    console.log(todoItem);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">TODO LIST</h1>
      <div className="mt-4 flex items-center">
        <input ref={inputRef} className="p-2 h-8 border-[1px] rounded" type="text" />
        <button className="w-8 h-8 bg-white border-[1px] rounded" type="button" onClick={addToList}>+</button>
      </div>
      <div className="mt-4 border-[1px] w-64 h-72 bg-white">
      </div>
    </div>
  )
};

export default Todolist;