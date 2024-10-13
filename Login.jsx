import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
//  const [success, setSuccess] = useState("");
//  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    };

/*    axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      console.log(res);
      localStorage.setItem("access_token", res.token);
      setError("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      console.log(err);
      setError(err);
      setSuccess('');
    });
  };*/

  axios
  .post("https://reqres.in/api/login", payload)
  .then(res => {
    localStorage.setItem("access_token", res.data.token);
/*    setTimeout(() => {
      navigate('/');
    }, 2000);*/
    console.log(res)
  }).catch(err => {
    console.log(err.response);
  });

  const isLogedin = localStorage.getItem("access_token");

  console.log(isLogedin);

  return (
    <div className="login-body">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input 
            onChange={handleChangeUserName}
            type="text"
            placeholder="Username"
            required 
            />
          </div>
          <div className="input-box">
            <input
            onChange={handleChangePassword}
            type="text"
            placeholder="Password"
            required
            />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button
          onClick={handleLogin}
          type="submit"
          >
            Login
          </button>
          <div className="register-link">
            <p>No account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
