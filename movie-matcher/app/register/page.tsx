import React from "react";
import { createAccount } from "../actions";

const Register = () => {
  return (
    <div className="w-100% h-[550px] bg-slate-800 text-white p-2">
      <h1>Register form</h1>
      <form action={createAccount}>
        <div>
          <label htmlFor="">First name: </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="">Last name: </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="text-black"
          />
        </div>
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
          <label htmlFor="">Email: </label>
          <input id="email" name="email" type="email" className="text-black" />
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="">Repeat password: </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            className="text-black"
          />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
