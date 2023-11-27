import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <article className="grid place-content-center h-[100vh]">
        <div className="flex flex-col gap-5">
          <div className="bg-teal-500 p-5">
            <Link to={"/company"}>je suis une Application</Link>
          </div>
          <div className="bg-teal-500 p-5">
            <Link to={"/user"}>Je suis un Utilisateur</Link>
          </div>
        </div>
      </article>
    </section>
  );
}
