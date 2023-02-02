import { useEffect, useRef, useState } from "react";

const Todolist = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputRef.current.value, completed: false, editing: false }]);
    inputRef.current.value = "";
  };

  const removeTodo = (indexToRemove) => {
    setTodos(prevTodos => {
      return prevTodos.filter((_, index) => index !== indexToRemove);
    })
  }
  // 因為這個函數主要是檢查數組項目的索引，並不需要使用項目的實際值，因此使用空白識別符 _ 可以清晰地表明代碼的意圖
  // prevTodos 代表在當前狀態下(函數執行之前)的待辦事項列表

  const toggleTodo = (indexToCompleted) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => {
        if (i === indexToCompleted) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )
  }

  const toggleEditing = (indexToEdit) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => {
        if (i === indexToEdit) {
          return {
            ...todo,
            editing: !todo.editing
          };
        }
        return todo;
      })
    )
  }

  const editTodo = (textEdit, indexToEdit) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => {
        if (i === indexToEdit) {
          return {
            ...todo,
            text: textEdit,
            editing: false
          };
        }
        return todo;
      })
    )
  }

  const clearAllTodo = () => {
    setTodos([]);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">TODO LIST</h1>
      <form className="mt-4 flex items-center" onSubmit={addTodo}>
        <input type="text" ref={inputRef} className="p-2 h-8 border-[1px] rounded" placeholder="type some todo item..."/>
        <button type="submit" className="w-8 h-8 bg-white border-[1px] rounded">+</button>
      </form>
      <div className="mt-4 p-4 border-[1px] w-64 bg-white">
        {
          todos.map((todo, index) => {
            return (
              <div className="w-full h-8 flex items-center rounded bg-[#f0f0f0] mt-2 first:mt-0 p-2 justify-between" key={index}>
                <div className="flex">
                  <input type="checkbox" className="checkBox mr-1" onClick={() => toggleTodo(index)}/>
                  <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                  {todo.editing ? (
                  <input type="text" className="w-[80%] ml-1 pl-1" defaultValue={todo.text} onBlur={(e) => editTodo(e.target.value, index)} autoFocus/>
                  ) : (
                    todo.text
                  )}
                  </div>
                </div>
                {todo.editing ? (
                <button className="w-10 h-6 p-0 flex justify-center items-center bg-white border-[1px] rounded-lg" onClick={() => toggleEditing(index)}>save</button>
                ) : (
                  <div className="flex justify-between">
                    <button type="button" className="w-10 h-6 p-0 flex justify-center items-center bg-white border-[1px] rounded-lg" onClick={() => toggleEditing(index)}>edit</button>
                    <button type="button" className="w-6 h-6 p-0 flex justify-center items-center bg-white border-[1px] rounded-full" onClick={() => removeTodo(index)}>x</button>
                  </div>
                )}
              </div>
            )
          })
        }
      </div>
      <button type="button" className="w-full h-8 flex items-center justify-center rounded bg-white mt-2" onClick={clearAllTodo}>CLEAR ALL TODO</button>
    </div>
  )
};

export default Todolist;
