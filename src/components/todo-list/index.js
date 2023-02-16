import { useEffect, useRef, useState } from "react";
import TodoForm from "../todo-form";
import TodoItem from "../todo-item";
import Button from "../button";

const TodoList = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { text: inputRef.current.value, completed: false, editing: false }]);
    inputRef.current.value = "";
  };

  const removeTodo = (indexToRemove) => {
    // 1. splice 笨方法
    // const newTodos = [...todos];
    // newTodos.splice(indexToRemove, 1);
    // setTodos(newTodos);

    // 2. filter 丹尼寫法
    // setTodos(
    //   todos.filter((todo, i) => {
    //     return indexToRemove !== i;
    // }))
    
    // 2. filter
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
    <div className="flex flex-col items-center w-[80%] mt-32">
      <h1 className="text-5xl font-bold text-black">TODO LIST</h1>
      <TodoForm
        inputRef={inputRef}
        addTodo={addTodo}/>
      <div className="w-72 mt-4 p-4 border-2 rounded">
        {
          todos.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                toggleTodo={() => toggleTodo(index)}
                removeTodo={() => removeTodo(index)}
                toggleEditing={() => toggleEditing(index)}
                editTodo={editTodo}
              />
            )
          })
        }
      </div>
      <Button text="CLEAR ALL" onClick={clearAllTodo} className="w-72 h-8 flex items-center justify-center border-[2px] rounded bg-white mt-2"/>
    </div>
  )
};

export default TodoList;