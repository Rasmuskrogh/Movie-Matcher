import React from "react";
import { loginAccount } from "../actions";

const Login = () => {
  return (
    <div className="w-100% h-[550px] bg-slate-800 text-white p-2">
      <h1>Login form</h1>
      <form action={loginAccount}>
        <div>
          <label htmlFor="">Username: </label>
          <input
            id="username"
            name="username"
            type="text"
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="">password: </label>
          <input
            id="password"
            name="password"
            type="password"
            className="text-black"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
