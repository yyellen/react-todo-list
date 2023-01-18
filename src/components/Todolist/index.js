import { useEffect, useRef, useState } from "react";

const Todolist = () => {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  const addToList = () => {
    const todoItem = inputRef.current.value;
    console.log(todoItem);
    setItems([...items, todoItem]); // 非同步
    inputRef.current.value = "";
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">TODO LIST</h1>
      <div className="mt-4 flex items-center">
        <input ref={inputRef} className="p-2 h-8 border-[1px] rounded" type="text" placeholder="type some todo item..."/>
        <button className="w-8 h-8 bg-white border-[1px] rounded" type="button" onClick={addToList}>+</button>
      </div>
      <div className="mt-4 border-[1px] w-64 h-72 bg-white">
        {
          items.map((item, index) => {
            return (
              <div className="w-full h-8 flex items-center rounded bg-[#f0f0f0] mt-2 first:mt-0 p-2" key={index}>
                {item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Todolist;