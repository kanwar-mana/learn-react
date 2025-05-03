import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>Plaese first Login</div>;
  return (
    <div>
      Welcome {user.username} your password is {user.password}
    </div>
  );
}

export default Profile;
