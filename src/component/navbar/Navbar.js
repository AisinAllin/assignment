import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignInLink from "./SignedInLink";
import SignOutLink from "./SignedOutLink";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth } = props;
  const signStateLlink = auth.uid ? <SignInLink /> : <SignOutLink />;
  return (
    <nav className="navbar">
      <div className="navbar--container">
        <Link to="/" className="navbar--title">
          CC assignment————S3762087
        </Link>
        <div className="navbar--signSta te">{signStateLlink}</div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
