import Button from "../button";

const TodoItem = ({todo, index, toggleTodo, removeTodo, toggleEditing, editTodo}) => {
  return (
    <div className="w-full h-8 flex items-center border-[1px] rounded mt-2 first:mt-0 p-2 justify-between" key={index}>
      <div className="flex">
        <input type="checkbox" className="mr-1" onClick={() => toggleTodo(index)}/>
        <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
          {todo.editing ? (
            <input type="text" className="w-[80%] ml-1 pl-1" defaultValue={todo.text} onBlur={(e) => editTodo(e.target.value, index)}/>
            ) : (
            todo.text
          )}
        </div>
      </div>
      {todo.editing ? (
        <Button text="save" onClick={() => toggleEditing(index)} className="h-6 p-2 flex justify-center items-center bg-black text-white border-[1px] rounded"/>
      ) : (
      <div className="flex justify-between">
        <Button text="edit" onClick={() => toggleEditing(index)} className="h-6 p-2 flex justify-center items-center bg-black text-white border-[1px] rounded"/>
        <Button text="x" onClick={() => removeTodo(index)} className="h-6 p-2 flex justify-center items-center bg-black text-white border-[1px] rounded"/>
      </div>
      )}
    </div>
  );
};

export default TodoItem;