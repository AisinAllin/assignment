import React from "react";
import { NavLink } from "react-router-dom";
import "./SignOutLink.css";

const SignedOutLink = () => {
  return (
    <ul className="signIn">
      <li>
        <NavLink to="/signup">Sign up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log in</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLink;
