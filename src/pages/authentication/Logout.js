import React, { useEffect } from "react";

const Logout = ({ setStoredToken }) => {
  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/v1/users", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Logout;
