import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
// import { Link } from "react-router-dom";

const User = ({ id, name, description, chooseRepo, html_url }) => {
  return (
    <div className="w-[300px] rounded-md border mb-6" key={id}>
      <VscGithubInverted className="text-6xl mx-auto mt-6" />

      <div className="p-4">
        <h1 className="text-lg font-semibold">
          <a href={html_url}>{name}</a>
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <button
          onClick={chooseRepo}
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Choose Repo
        </button>
      </div>
    </div>
  );
};

export default User;
