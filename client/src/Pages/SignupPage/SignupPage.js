import "./SignupPage.scss";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/users/register", {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });

      setSuccess(true);
      setError(null);
      event.target.reset();
      navigate("/login");
    } catch (error) {
      setSuccess(false);
      setError(error.response.data);
    }
  };

  return (
    <main className="signup-page">
      <form className="signup" onSubmit={handleSubmit}>
        <h1 className="signup__title">Sign up</h1>

        <Input type="text" name="name" label="Display Name" />
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />

        <button className="signup__button">Sign up</button>

        {success && <div className="signup__message">Signed up!</div>}
        {error && <div className="signup__message">{error}</div>}
      </form>

      <p>
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
}

export default SignupPage;
