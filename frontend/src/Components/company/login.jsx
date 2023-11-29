import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [company, setCompany] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://fglindayi-um-hetic-code-redirect-3.apps.sandbox-m3.1530.p1.openshiftapps.com/company/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );
      const res = await response.json();
      if (res.success) {
        console.log({ res, company: res.company });
        setLoginSuccess(true);
        setResponseMsg("Compagnie créée avec succès.");
        setCompany(res.company);
      } else {
        setResponseMsg(response.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg(
        "Une erreur s'est produite lors de la soumission du formulaire."
      );
    }

    console.log("Login form submitted:", { email, password });
  };

  if (loginSuccess) {
    return <Company company={company} />;
  }

  return (
    <div className="min-w-md mx-auto mt-8 grid place-content-center h-[90vh]">
      <div className="text-center flex flex-col gap-5 pb-5">
        <h1 className="text-xl font-bold">Connexion</h1>
      </div>
      {!loginSuccess && responseMsg && (
        <p className="text-red-500">{responseMsg}</p>
      )}
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
  );
}

function Company({ company }) {
  console.log(company);
  let url = `http://fglindayi-um-hetic-code-redirect-3.apps.sandbox-m3.1530.p1.openshiftapps.com/users/login/${company?.id}`;
  return (
    <section className="grid place-content-center h-[80vh] border rounded">
      <article className="flex gap-4">
        <p>Date de création:</p>
        <p>{company?.date_of_creation}</p>
      </article>
      <article className="flex gap-4">
        <p>Numéro de siret:</p>
        <p>{company?.siret}</p>
      </article>
      <article className="flex gap-4">
        <p>Type d'application:</p>
        <p>{company?.type}</p>
      </article>
      <article className="flex gap-4">
        {
        <p>Trouver <a href={url} className=" bg-blue-500 text-white">ici</a> le lien à utiliser pour la connexion de vos utilisateurs (le type de requete est POST)</p>
        }
      </article>
    </section>
  );
}

export default Login;
