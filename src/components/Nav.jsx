import React from "react";

const Nav = () => {
  return <div className="w-[90%] flex items-center justify-center gap-3 bg-white h-[60px] mx-auto rounded">
    <div className="logo">
        <img src="/images/logos_firebase.svg" alt="" />
    </div>
    <div className="heading">
        <h1 className="text-xl font-semibold">Firebase Contact App</h1>
    </div>
  </div>;
};

export default Nav;
