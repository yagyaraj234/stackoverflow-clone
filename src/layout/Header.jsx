import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  IoMdHelpBuoy,
  IoMdDesktop,
  BsChevronDown,
} from "../icons/index";

const Header = () => {
  return (
    <div className="flex px-10 items-center justify-between py-2">
      <div className="flex gap-7">
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Stack_Overflow.png?20210324193649"
          alt="Stackoverflowlogo"
        />

        <AiOutlineMenu className="text-xl mt-4 text-lightgray" />
        <div className="flex  items-center mt-1 ">
          <AiOutlineSearch className="text-xl text-lightgray mt-1" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none md:w-[80vh] text-sm text-lightgray"
          />
        </div>
      </div>
      <div className="flex gap-5 text-lightgray">
        <div className="flex gap-1">
          <IoMdHelpBuoy className="mt-1" />
          <p className="text-sm">Help</p>
        </div>
        <div className="flex gap-1">
          <IoMdDesktop className="mt-1" />
          <p className="text-sm">Tour</p>
        </div>
        <div className="flex ">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png"
            alt=""
            className="h-6"
          />
          <BsChevronDown className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
