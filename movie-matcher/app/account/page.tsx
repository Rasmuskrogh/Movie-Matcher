import React from "react";
import { MdEdit } from "react-icons/md";

const accountPage = () => {
  return (
    <div className="bg-slate-800 text-white p-2 w-100% h-[550px]">
      {/* <h1>Contacts Page</h1>
    <p className="text-red-600">Page under construction</p>
     */}
      <div className="flex items-baseline">
        <h2 className="mr-3 text-xl mb-2">Account information</h2>
        <span className="flex items-baseline">
          edit <MdEdit fill="white" className="ml-1 self-center" />
        </span>
      </div>
      <form action="" className="flex flex-col">
        <div className="flex justify-between mr-4">
          <label>First name:</label>
          <input
            placeholder="John Doe"
            type="text"
            name="name"
            className="border-solid border-slate-800 border-2"
          />
        </div>
        <div className="flex justify-between mr-4">
          <label>Last name:</label>
          <input
            placeholder="John Doe"
            type="text"
            name="name"
            className="border-solid border-slate-800 border-2"
          />
        </div>
        <div className="flex justify-between mr-4">
          <label>Username:</label>
          <input
            placeholder="Doctor John"
            type="text"
            name="username"
            className="border-solid border-slate-800 border-2"
          />
        </div>
        <div className="flex justify-between mr-4">
          <label>Email:</label>
          <input
            placeholder="john@doctor.com"
            type="text"
            name="email"
            className="border-solid border-slate-800 border-2"
          />
        </div>
        <div className="flex justify-between mr-4">
          <label>Password:</label>
          <input
            placeholder="d0Ct0RJ"
            type="text"
            name="password"
            className="border-solid border-slate-800 border-2"
          />
        </div>
      </form>
      <h2 className="text-xl mt-4 mb-2">Applications</h2>
      <form action="" className="flex flex-col">
        <div>
          <input type="checkbox" className="mr-2" />
          <label>Netflix</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>HBO Max</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>Prime video</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>Disney+</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>Apple TV</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>Showtime</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>Viaplay</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>TV4 Play</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>Discovery+</label>
        </div>
        <div>
          <input type="checkbox" className="mr-2" />
          <label>SVT Play</label>
        </div>
      </form>

      <button className="mt-8 text-red-500 text-lg bg- red-300 font-bold p-2">
        Logout
      </button>
    </div>
  );
};

export default accountPage;
