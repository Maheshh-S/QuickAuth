import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-sky-200 ">
      <div className="flex items-center justify-between  max-w-6xl mx-auto ">
        <Link to={"/"}>
          <h1 className="text-2xl p-3 font-bold">Auth</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/About"}>
            <li>About</li>
          </Link>
          <Link to={"/Signin"}>
          <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
