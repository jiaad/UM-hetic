import React, {useState} from "react";

export default function UserRegister() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")
  function onSubmit(event) {
    event.preventDefault()

  }
  return (
    <div className="container">
      <form id="connectionForm" onSubmit={onSubmit} >
                <label htmlFor="email">Company email </label>
                <input type="text" id="email" name="Company email" placeholder="Company@email.com" required />
                <label htmlFor="password">password </label>
                <input type="text" id="password" name="password" placeholder="********" required />
                <button type="submit">Login</button>
      </form>
    </div>
    );
}
