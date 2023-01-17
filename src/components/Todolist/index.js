const Todolist = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">TODO LIST</h1>
      <div className="mt-4 flex items-center">
        <input className="p-2 h-8 border-[1px] rounded" type="text" />
        <button className="w-8 h-8 bg-white border-[1px] rounded" type="button">+</button>
      </div>
      <div className="mt-4 border-[1px] w-64 h-72 bg-white">
      </div>
    </div>
  )
};

export default Todolist;