import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 w-full h-16 pr-16">
      <div className="flex items-center h-full justify-end gap-24 font-poppins text-white">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Experiences</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default Navbar;
