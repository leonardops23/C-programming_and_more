
const TodoHero = ({ todos_completed, total_todos }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-medium text-gray-800">Task Done</p>
          <p className="text-sm text-gray-600">Keep it up</p>
        </div>
        <div className="w-24 h-24 rounded-full bg-lime-300 flex items-center justify-center text-xl font-bold text-gray-800">
          {todos_completed} / {total_todos}
        </div>
      </div>
    </div>
  )
}

export default TodoHero
