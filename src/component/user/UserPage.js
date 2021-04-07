import React, { Component } from "react";
import { connect } from "react-redux";
import { createForum } from "../../store/action/forumAction";
import { changePassword, signOut } from "../../store/action/authAction";
import { Redirect } from "react-router-dom";
import "./UserPage.css";

class UserPage extends Component {
  state = {
    title: "",
    content: "",
    newPassword: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createForum(this.state);
    this.props.history.push("/");
  };
  changePassword = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.changePassword(this.state);
    this.props.signOut();
    this.props.history.push("/signin");
  };
  render() {
    const { auth, authError } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h5>Create a Forum</h5>

          <div className="input-field">
            <label htmlFor="title">Forum Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Forum Content</label>
            <textarea
              id="content"
              className="textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div className="input-field">
            <button className="createBotton">Create</button>
          </div>
        </form>

        <form className="passwordChanger" onSubmit={this.changePassword}>
          <h5>Change your password</h5>
          {/* <div className="input-field">
              <label htmlFor="password">Old Password</label>
              <input type="password" id='oldPassword' onChange={this.handleChange} />
          </div> */}

          <div className="input-field">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="newPassword"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <button className="signinButton">change password</button>
            <div className="warningMessage">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createForum: (forum) => dispatch(createForum(forum)),
    changePassword: (newPassword) => dispatch(changePassword(newPassword)),
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
