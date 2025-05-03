import React from "react";
import { useParams } from "react-router-dom";

function User() {
  //Get data from route path after ':' the vlue store in it and the it store into userid
  const { userid } = useParams(); //get parameter from route path after':'
  return (
    <>
      <h1 className="bg-slate-600 p-4 text-xl text-white">User: {userid}</h1>
    </>
  );
}

export default User;
