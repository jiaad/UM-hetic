import { useState } from "react";

export default function Register() {
  const [siret, setSiret] = useState("");
  const [dateOfCreation, setDateOfCreation] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [created, setCreated] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("start----");

    try {
      const response = await fetch(
        "http://fglindayi-um-hetic-code-redirect-3.apps.sandbox-m3.1530.p1.openshiftapps.com/company",
        {
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
        }
      );
      const res = await response.json();
      console.log("successsss----", res);
      if (res.success) {
        setResponseMessage(res.message);
        setCreated(true);
      } else {
        setResponseMessage(response.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error, error.message);
      setResponseMessage(error.message);
    }
  };

  // if created replace components
  if (created) {
    return <CompanyCreated message={responseMessage} />;
  }

  return (
    <div className="min-w-md mx-auto mt-8">
      {!created && responseMessage && (
        <div className="text-sm text-red-700 text-center pb-5">
          {responseMessage}
        </div>
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
  );
}

function CompanyCreated({ message }) {
  return (
    <section className="grid place-content-center h-[80vh]">
      <article className="text-green-500 text-center pb-5 font-bold border rounded py-5 px-5">
        {message}
      </article>
    </section>
  );
}
