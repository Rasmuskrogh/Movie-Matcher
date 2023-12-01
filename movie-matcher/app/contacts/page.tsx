import React from "react";
import { MdEdit } from "react-icons/md";

const contactsPage = () => {
  return (
    <div className="bg-slate-800 text-white p-2">
      <h1>Contacts Page</h1>
      <p className="text-red-600">Page under construction</p>
      <div className="flex items-baseline">
        <h2 className="mr-3 text-xl mb-2">Account information</h2>
        <span className="flex items-baseline">
          edit <MdEdit fill="white" className="ml-1 self-center" />
        </span>
      </div>
      <form action="" className="flex flex-col">
        <div className="flex justify-between mr-4">
          <label>Name:</label>
          <input
            placeholder="John Doe"
            type="text"
            name="name"
            className="border-solid border-black border-2"
          />
        </div>
        <div className="flex justify-between mr-4">
          <label>Username:</label>
          <input
            placeholder="Doctor John"
            type="text"
            name="username"
            className="border-solid border-black border-2"
          />
        </div>
        <div className="flex justify-between mr-4">
          <label>Email:</label>
          <input
            placeholder="john@doctor.com"
            type="text"
            name="email"
            className="border-solid border-black border-2"
          />
        </div>
        <div className="flex justify-between mr-4">
          <label>Password:</label>
          <input
            placeholder="d0Ct0RJ"
            type="text"
            name="password"
            className="border-solid border-black border-2"
          />
        </div>
      </form>
      <h2 className="text-xl mt-4 mb-2">Applications</h2>
      <form action="" className="flex flex-col">
        <div>
          {" "}
          <input type="checkbox" />
          <label>Netflix</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>HBO Max</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>Prime video</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>Disney+</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>Apple TV</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>Showtime</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>Viaplay</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>TV4 Play</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>Discovery+</label>
        </div>
        <div>
          {" "}
          <input type="checkbox" />
          <label>SVT Play</label>
        </div>
      </form>
    </div>
  );
};

export default contactsPage;
