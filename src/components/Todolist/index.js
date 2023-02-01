import { useEffect, useRef, useState } from "react";

const Todolist = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const todoItem = inputRef.current.value;
    // console.log(todoItem);
    setTodos([...todos, todoItem]);
    inputRef.current.value = "";
  };

  const removeTodo = (indexToRemove) => {
    // console.log(indexToRemove);
    setTodos(prevTodos => {
      return prevTodos.filter((_, index) => index !== indexToRemove);
      // 因為這個函數主要是檢查數組項目的索引，並不需要使用項目的實際值，因此使用空白識別符 _ 可以清晰地表明代碼的意圖
    })
  }

  const clearAll = () => {
    setTodos([]);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">TODO LIST</h1>
      <div className="mt-4 flex items-center">
        <input type="text" ref={inputRef} className="p-2 h-8 border-[1px] rounded" placeholder="type some todo item..."/>
        <button type="button" className="w-8 h-8 bg-white border-[1px] rounded" onClick={addTodo}>+</button>
      </div>
      <div className="mt-4 p-4 border-[1px] w-64 bg-white">
        {
          todos.map((todo, index) => {
            return (
              <div className="w-full h-8 flex items-center rounded bg-[#f0f0f0] mt-2 first:mt-0 p-2 justify-between" key={index}>
                <input type="checkbox" className="checkBox" />
                {todo}
                <button type="button" className="w-6 h-6 p-0 flex justify-center items-center bg-white border-[1px] rounded-full" onClick={() => removeTodo(index)}>x</button>
              </div>
            )
          })
        }
      </div>
      <button type="button" className="w-full h-8 flex items-center justify-center rounded bg-white mt-2" onClick={clearAll}>CLEAR ALL TODO</button>
    </div>
  )
};

export default Todolist;
