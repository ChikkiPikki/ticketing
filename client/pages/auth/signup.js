import { useState } from "react";
import Router from "next/router";

import useRequest from "../../hooks/use-request";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: { email, password },
    onSuccess: () => {
      Router.push("/");
    },
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
      </div>
      {errors}
      <br></br>
      <button className="btn btn-primary">Signup</button>
    </form>
  );
};
