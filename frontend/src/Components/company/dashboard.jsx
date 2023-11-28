import React from "react"

const users = [
	{ id: 1, lastName: "jiad", firstName: "jiasd", email: "jiad@jiad.com" },
	{ id: 2, lastName: "jiad", firstName: "jiasd", email: "jiad@jiad.com" },
	{ id: 3, lastName: "jiad", firstName: "jiasd", email: "jiad@jiad.com" },
	{ id: 4, lastName: "jiad", firstName: "jiasd", email: "jiad@jiad.com" },
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
