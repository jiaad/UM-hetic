import { useState } from "react"

export default function Register() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [birthDate, setBirthDate] = useState("")
	const [gender, setGender] = useState("")
	const [number, setNumber] = useState("")
	const [address, setAddress] = useState("")

	const [responseMessage, setResponseMessage] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await fetch("http://localhost:3001/user", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					email,
					password,
					firstName,
					lastName,
					birth_date : birthDate,
					gender,
					number,
					adresse : address
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
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<input
						type="text"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setGender(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Mot De Passe
					</label>
					<input
						type="text"
						id="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="firstName"
						className="block text-sm font-medium text-gray-700"
					>
						Prénom
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>
				<div>
					<label
						htmlFor="lastName"
						className="block text-sm font-medium text-gray-700"
					>
						Nom
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>
				<div>
					<label
						htmlFor="birthDate"
						className="block text-sm font-medium text-gray-700"
					>
						Date De Naissance
					</label>
					<input
						type="text"
						id="birthDate"
						name="birthDate"
						value={birthDate}
						onChange={(e) => setBirthDate(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="gender"
						className="block text-sm font-medium text-gray-700"
					>
						Votre Genre
					</label>
					<input
						type="gender"
						id="gender"
						name="gender"
						value={gender}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="number"
						className="block text-sm font-medium text-gray-700"
					>
						Numéro de Téléphone
					</label>
					<input
						type="number"
						id="number"
						name="number"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>

				<div>
					<label
						htmlFor="address"
						className="block text-sm font-medium text-gray-700"
					>
						Adresse
					</label>
					<input
						type="address"
						id="address"
						name="address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
						className="mt-1 p-2 border border-gray-300 rounded-md w-full"
					/>
				</div>
				<div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
					>
						Enregister
					</button>
				</div>
			</form>
		</div>
	)
}
