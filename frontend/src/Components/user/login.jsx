import { useState } from "react"

export function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await fetch("http://localhost:3001/users/login", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
				}),
			})
			const res = await response.json()
			if (res.ok) {
				setError("Connecté !")
			} else {
				setError(response.message)
			}
		} catch (error) {
			console.error("Error submitting form:", error)
			setError("Une erreur s'est produite lors de la soumission du formulaire.")
		}

		console.log("Login form submitted:", { email, password })
	}

	return (
		<div className="min-w-md mx-auto mt-8 grid place-content-center h-[90vh]">
			<div className="text-center flex flex-col gap-5 pb-5">
				<h1 className="text-xl font-bold">Connexion</h1>
			</div>
			{error && <p className="text-red-500">{error}</p>}
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
					>
						Login
					</button>
				</div>
			</form>
		</div>
	)
}

export default Login
