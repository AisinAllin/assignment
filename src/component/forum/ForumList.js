import React from "react";
import "./ForumList.css";
import FroumDetial from "./ForumDetail";

const Froumlist = ({ forum }) => {
  return (
    <div className="froumlist--container">
      {forum &&
        forum.map((item) => {
          return (
            <FroumDetial
              className="fourmlist--content"
              forum={item}
              key={item.id}
            />
          );
        })}
    </div>
  );
};

export default Froumlist;
