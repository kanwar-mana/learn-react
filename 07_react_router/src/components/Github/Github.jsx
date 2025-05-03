import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kanwar-mana")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       }, []);
  //   });
  const data = useLoaderData(); //Use to load data from route Loader property and then store it after property get data from function
  return (
    <div className="bg-slate-600 text-white text-2xl">
      Followers: {data.followers}
      <img
        className="w-28 flex justify-center"
        src={data.avatar_url}
        alt="img"
      />
      Bio: {data.bio}
    </div>
  );
}

export default Github;

export const gitHubinfoloader = async () => {
  const response = await fetch("https://api.github.com/users/kanwar-mana");
  return response.json();
};
