import TodoHero from './TodoHero'
import Forms from './Forms'
import TodoList from './TodoList'
import { useState } from 'react'


const Header = () => {
  const [todos, setTodos] = useState([

    {
      title: "Ivan",
      id: self.crypto.randomUUID(),
      is_completed: false,
    },
    {
      title: "Some other task",
      id: self.crypto.randomUUID(),
      is_completed: true,
    }
  ])

  
  return (
    <section className='max-w-sm mx-auto p-4'>
      <TodoHero todos_completed={0} total_todos={0}/>
      <Forms />
      <TodoList todos={todos}/>
    </section>
  )
}

export default Header
