import React from "react";
import "./ForumDetail.css";
import moment from "moment";

const ForumDetail = ({ forum }) => {
  return (
    <div className="forum--card">
      <div className="card-content">
        <span className="card-title ">{forum.title}</span>
        <p>{forum.content}</p>
        <p className="authorName">
          posted by {forum.authorFirstName} {forum.authorLastName}
        </p>
        <p className="postDate">
          {moment(forum.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ForumDetail;
