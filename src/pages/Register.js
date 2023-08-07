import React, { useState } from "react";
import swal from "sweetalert";
function Register() {
  let [username, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let submitData = () => {
    let payload = {
      username: username,
      email: email,
      password: password,
    };
    console.log(payload);
    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.jwt) {
          swal("Registered Successfully!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Register Page</h1>
      <form>
        <div className="w-25 offset-4 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="username"
            name="username"
            value={username}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label htmlFor="exampleInputEmail2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="enamil"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="w-25 offset-4 mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check justify-content-center offset-4">
          <input
            type="checkbox"
            className="form-check-input justify-content-center"
            id="exampleCheck1"
          />
          <label
            className="form-check-label justify-content-center"
            htmlFor="exampleCheck1"
          >
            Check me out
          </label>
        </div>
        <button
          onClick={submitData}
          type="button"
          className="btn btn-primary justify-content-center offset-4"
        >
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
