import React from "react";

const Profile = props => (
  <div>
    <img className="profile-pic" src={props.picture} alt="" />

    <p>{props.fullname}</p>
  </div>
);

export default Profile;
