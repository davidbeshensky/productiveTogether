import React from "react";
import { UserButton } from "@clerk/nextjs"

const Header = () => {
  return (
    <div className="bg-blue-500 p-5 m-5">
      <div className="fixed top-1 right-5">
        <UserButton />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">        
          <div> 
          Add 
          </div>
          <input type="text" />
        </div>      

      </div>

    </div>
  );
};

export default Header;
