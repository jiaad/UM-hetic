import React from 'react'
import { Link } from "react-router-dom";
export default function UserIndex() {
  return (
    <div>
      <article className="flex gap-5 justify-center items-center mt-10">
				<Link to={"/user/login"}>
					<button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Login</button>
				</Link>
				<Link to={"/user/register"}>
					<button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Register</button>
				</Link>
			</article>
    </div>
  )
}
