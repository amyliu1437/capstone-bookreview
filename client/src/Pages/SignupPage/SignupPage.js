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

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const nameInput = event.target.name.value;
    const emailInput = event.target.email.value;
    const passwordInput = event.target.password.value;

    if(!nameInput){
      setNameError("Please input your name!")
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailInput || !emailRegex.test(emailInput)){
      setEmailError("Please input correct email address!")
      return false;
    }
    
    if(!passwordInput||passwordInput.length < 6){
      setPasswordError("The password must be 6 letters or more!")
      return false;
    }


    try {
      await axios.post("http://localhost:8080/users/register", {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
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

        <Input type="text" name="name" label="Name" status={nameError} />
        <Input type="text" name="email" label="Email" status={emailError} />
        <Input type="password" name="password" label="Password" status={passwordError} />

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
