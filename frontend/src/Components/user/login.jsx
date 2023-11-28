import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://fglindayi-um-hetic-code-redirect-3.apps.sandbox-m3.1530.p1.openshiftapps.com/users/login",
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
        console.log({ res });
        setLoginSuccess(true);
        setError("Connecté !");
        setUser(res.data);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message, error);
      setError(
        "Une erreur s'est produite lors de la soumission du formulaire."
      );
    }

    console.log("Login form submitted:", { email, password });
  };

  if (loginSuccess) {
    return <User user={user} />;
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
  );
}

function User({ user }) {
  console.log(user);
  return (
    <section className="grid place-content-center h-[80vh] border rounded">
      <article className="flex gap-4">
        <p>Nom:</p>
        <p>{user?.firstname}</p>
      </article>
      <article className="flex gap-4">
        <p>prénom:</p>
        <p>{user?.lastname}</p>
      </article>
      <article className="flex gap-4">
        <p>email:</p>
        <p>{user?.email}</p>
      </article>
    </section>
  );
}
