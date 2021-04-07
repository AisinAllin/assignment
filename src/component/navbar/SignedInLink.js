import React from "react";
import { NavLink } from "react-router-dom";
import "./SignedInLink.css";
import { connect } from "react-redux";
import { signOut } from "../../store/action/authAction";

const SignedInLink = (props) => {
  const { lastName, firstName } = props;
  return (
    <ul className="signIn">
      <li>
        <NavLink to="/userpage">
          {firstName} {lastName}
        </NavLink>
      </li>
      <li>
        <button onClick={props.signOut}>Log Out</button>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    firstName: state.firebase.profile.firstName,
    lastName: state.firebase.profile.lastName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLink);
