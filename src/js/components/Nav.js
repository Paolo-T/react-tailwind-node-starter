import React from 'react'

function Nav() {
  return (
   <nav>
     <ul className="inline-flex">
        <li className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Home</li>
        <li className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">About</li>
        <li className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Work</li>
        <li className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Contact</li>
     </ul>
   </nav>
  )
}

export default Nav;
