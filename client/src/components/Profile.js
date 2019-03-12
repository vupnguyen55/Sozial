import React from "react";

const Profile = props => (
  <div>
    <img id="profilePic" className="profile-pic" src={props.picture} alt="" />

    <p id="fullname">{props.fullname}</p>
  </div>
);

export default Profile;
