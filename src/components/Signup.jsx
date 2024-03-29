import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Signup = (props) => {

  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword : "" });
  
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const {name, email, password} = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
     
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       name, email, password
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/")
      props.showalert("Account Created Successfully","success");
    } else {
      props.showalert("invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2 className="my-3">Signup to continue with Cloud-Notebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name" 
            onChange = {onChange}
            aria-describedby="email"
            name="name"
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email" 
            onChange = {onChange}
            aria-describedby="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password" 
            onChange = {onChange}
            name="password"
            minLength={5}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword"> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword" 
            onChange = {onChange}
            name="cpassword"
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
