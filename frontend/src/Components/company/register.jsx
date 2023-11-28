import { useState } from "react"

export default function Register() {
	const [siret, setSiret] = useState("")
	const [dateOfCreation, setDateOfCreation] = useState("")
	const [type, setType] = useState("")
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [responseMessage, setResponseMessage] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await fetch("http://localhost:3001/company", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					siret,
					date_of_creation: dateOfCreation,
					type,
					name,
					email,
					password,
				}),
			})
			const res = await response.json()
			if (res.ok) {
				setResponseMessage("Compagnie créée avec succès.")
			} else {
				setResponseMessage(response.message)
			}
		} catch (error) {
			console.error("Error submitting form:", error)
			setResponseMessage(
				"Une erreur s'est produite lors de la soumission du formulaire."
			)
		}
	}

	return (
		<div className="min-w-md mx-auto mt-8">
			{responseMessage && (
				<div className="text-sm text-red-700 text-center pb-5">{responseMessage}</div>
			)}
			<form onSubmit={handleSubmit} className="space-y-6 min-w-[50vw]">
				<div>
					<label
						htmlFor="siret"
						className="block text-sm font-medium text-gray-700"
					>
						Numéro de SIRET
					</label>
					<input
						type="text"
						id="siret"
						name="siret"
						value={siret}
						onChange={(e) => setSiret(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="dateOfCreation"
						className="block text-sm font-medium text-gray-700"
					>
						Date de création
					</label>
					<input
						type="text"
						id="dateOfCreation"
						name="dateOfCreation"
						value={dateOfCreation}
						onChange={(e) => setDateOfCreation(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="type"
						className="block text-sm font-medium text-gray-700"
					>
						Type de compagnie
					</label>
					<input
						type="text"
						id="type"
						name="type"
						value={type}
						onChange={(e) => setType(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700"
					>
						Nom de la compagnie
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email de la compagnie
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
						Mot de passe
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
						Créer la compagnie
					</button>
				</div>
			</form>
		</div>
	)
}
