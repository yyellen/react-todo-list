import Button from "../button";

const TodoForm = ({ inputRef, addTodo }) => {
  return (
    <div className="w-72 mt-4 flex justify-center">
      <input
        type="text"
        ref={inputRef}
        className="w-64 h-8 p-2 border-[2px] rounded"
        placeholder="new task"
      />
      <Button
        text="+"
        onClick={addTodo}
        className="w-8 h-8 ml-1 border-[2px] rounded"
      />
    </div>
  );
};

export default TodoForm;

// 2.form onSubmit
// React 使用了一種虛擬 DOM 技術，當表單送出時，React 只會更新需要更新的部分，而不會重新載入整個頁面。因此在 React 中使用 event.preventDefault() 可以防止表單預設行為，但在某些情況下也可以不用。不過，為了確保應用程式的正常運作，建議使用 event.preventDefault() 來避免潛在的問題。

// const TodoForm = ({inputRef, addTodo}) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTodo({
//       text: inputRef.current.value,
//       completed: false,
//       editing: false,
//     });
//     inputRef.current.value = "";
//   };

//   return (
//     <form className="w-72 mt-4 flex justify-center" onSubmit={handleSubmit}>
//       <input type="text" ref={inputRef} className="w-64 p-2 h-8 border-[2px] rounded" placeholder="new task"/>
//       <button type="submit" className="w-8 h-8 ml-1 border-[4px] rounded">+</button>
//     </form>
//   );
// }

// export default  TodoForm;
