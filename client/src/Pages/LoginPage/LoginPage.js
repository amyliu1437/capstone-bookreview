import "./LoginPage.scss";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../App';

function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    try {
      const response = await axios.post("http://localhost:8080/users/login", {
        email: event.target.email.value,
        password: event.target.password.value
      });
  
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);

      navigate("/");
    } catch (error) {
      console.log("failed to login: "+error)
      setError("Failed to login");
    }
  };

  return (
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />

        <button className="login__button">Log in</button>
        {error && <div className="login__message">{error}</div>}
      </form>

      <p>
        Need an account? <Link to="/register">Sign up</Link>
      </p>
    </main>
  );
}

export default LoginPage;
