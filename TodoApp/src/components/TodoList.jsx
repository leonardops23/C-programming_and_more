import React from 'react';

function Item({ item }) {
  return (
    <li
      id={item?.id}
      className="flex items-center justify-between py-2 px-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
    >
      <button className="flex items-center focus:outline-none">
        <svg
          className="w-6 h-6 mr-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        </svg>
        <p className="text-gray-800">{item?.title}</p>
      </button>
      <div className="flex items-center space-x-2">
        <button className="text-gray-400 hover:text-blue-500 focus:outline-none transition-colors duration-200">
          <span className="sr-only">Edit</span> {/* sr-only es la clase de Tailwind para visually-hidden */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" /> {/* Icono de editar (un más) */}
          </svg>
        </button>
        <button className="text-gray-400 hover:text-red-500 focus:outline-none transition-colors duration-200">
          <span className="sr-only">Delete</span>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" /> {/* Icono de eliminar (una x) */}
          </svg>
        </button>
      </div>
    </li>
  );
}

function TODOList({ todos }) {
  return (
    <ol className="todo_list bg-white rounded-lg shadow-md p-4 max-w-lg mx-auto">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <Item key={index} item={item}/>
        ))
      ) : (
        <p className="text-gray-600 text-center py-4">Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default TODOList;
