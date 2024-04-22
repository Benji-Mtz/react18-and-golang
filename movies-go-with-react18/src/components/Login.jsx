import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();
  const { setAlertClassName } = useOutletContext();
  const { setAlertMessage } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log("email, password", email, password);

    if (email === "admin@example.com") {
      setJwtToken("abc");
      setAlertClassName("d-none");
      setAlertMessage("");
      navigate("/");
    } else {
      setAlertClassName("alert-danger")
      setAlertMessage("Invalid credencials")
    }

  }

  return (
    <div className="col-md-6 offset-md-3">
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">Email address</label>
          <input 
            id="email"
            title="Email address"
            type="email" 
            className="form-control"
            name="email" 
            autoComplete="email-new"
            onChange={(event)=> setEmail(event.target.value)}
          />
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            id="password"
            title="Password"
            type="password" 
            className="form-control"
            name="password" 
            autoComplete="password-new"
            onChange={(event)=> setPassword(event.target.value)}
          />
          <hr />

          <input 
            type="submit" 
            className="btn btn-primary"
            value="Login"
          />
        </form>
    </div>
  )
}

export default Login