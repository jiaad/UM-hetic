import React from "react"
import { Link } from "react-router-dom";
const users = [
	{ id: 1, lastName: "random", firstName: "RANDOM", email: "random@random.com" },
	{ id: 2, lastName: "random", firstName: "RANDOM", email: "random@random.com" },
	{ id: 3, lastName: "random", firstName: "RANDOM", email: "random@random.com" },
	{ id: 4, lastName: "random", firstName: "RANDOM", email: "random@random.com" },
]

export default function CompanyIndex() {
	return (
		<section className="grid place-content-center h-[100vh]">
			<article className="flex justify-center items-center font-bold pb-5">
				<h3>User list:</h3>
			</article>
			<article className="grid gap-5">
				{users?.map((user) => (
					<User key={user.id} user={user} />
				))}
			</article>
			<article className="flex gap-5 justify-center items-center mt-10">
				<Link to={"/company/login"}>
					<button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Login</button>
				</Link>
				<Link to={"/company/register"}>
					<button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Register</button>
				</Link>
			</article>
		</section>
	)
}

function User({ user }) {
	return (
    <>
		<div className="flex gap-5 justify-center items-center">
			<p>{user?.firstName}</p>
			<p>{user?.lastName}</p>
			<p>{user?.email}</p>
			<button className="bg-red-500 px-5 px-5 py-1 rounded">Delete</button>
			<button className="bg-green-500 px-5 py-1 rounded">Visit</button>
		</div>

    </>
	)
}
