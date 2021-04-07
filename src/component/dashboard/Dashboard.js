import React from "react";
import { Component } from "react";
import ForumList from "../forum/ForumList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { forum, auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    } else {
      return (
        <div className="dashboard--container">
          <div className="dashboard--context">
            <div className="list">
              <ForumList forum={forum} />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    forum: state.firestore.ordered.forum,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "forum", orderBy: ["createdAt", "desc"], limit: 10 },
  ])
)(Dashboard);
