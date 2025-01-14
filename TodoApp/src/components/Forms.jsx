
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
  }

  return (
    <form
      action=""
      className="form mt-2 mb-2 p-2 flex items-center justify-between shadow "
      onClick={handleSubmit}>
      <label htmlFor="todo">
        <input
          className="focus:outline-none"
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"/>
      </label>
      <button className="w-7 h-7 rounded-full bg-lime-300 flex items-center justify-center text-xl font-bold text-gray-800">
        <span>+</span>
      </button>
    </form>
  )
}

export default Form
