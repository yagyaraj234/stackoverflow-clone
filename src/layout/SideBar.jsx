import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BiQuestionMark,
  PiBagSimpleBold,
  HiOutlineDocumentText,
  BsTag,
  CiUser,
  BsBookmark,
  PiSpeakerHigh,
  FaInbox,
  FaStackExchange,
  AiOutlineLeft,
  AiOutlineRight,
} from "../icons/index";

const SideBar = () => {
  const [hide, setHidden] = useState(false);
  const [wd, setWidth] = useState("20%");

  const handleClick = () => {
    if (wd === "20%") {
      setWidth("10%");
      setHidden(true);
    } else {
      setWidth("20%");
      setHidden(false);
    }
  };
  return (
    <div
      style={{ width: wd }}
      className="flex flex-col  transition-transform duration-300    shadow-2xl box-shadow pb-5 sticky top-0 max-h-[90vh]"
    >
      {/* <div className={`${hide && "invisible"}`}>
        <AiOutlineLeft
          className=" text-lg float-right w-6 h-8  border rounded-l-xl text-lightgray"
          onClick={handleClick}
        />
      </div> */}

      {!hide ? (
        <div>
          <AiOutlineLeft
            className=" text-lg float-right w-6 h-8  border rounded-l-xl text-lightgray"
            onClick={handleClick}
          />
        </div>
      ) : (
        <div>
          <AiOutlineRight
            className=" text-lg float-right w-6 h-8  border rounded-l-xl text-lightgray"
            onClick={handleClick}
          />
        </div>
      )}

      <div className="flex flex-col gap-6">
        <NavLink to="/" className="flex gap-3  pr-4 text-darkgray ">
          <BiQuestionMark className="icon  " />
          {!hide && <p className={`uppercase`}>Questions</p>}
        </NavLink>
        <NavLink to="/jobs" className="flex gap-3  pr-4 text-darkgray">
          <PiBagSimpleBold className="icon" />
          {!hide && <p className="uppercase ">Jobs</p>}
        </NavLink>
        <NavLink to="/documentation" className="flex gap-3  pr-4 text-darkgray">
          <HiOutlineDocumentText className="icon text-darkgray" />
          {!hide && <p className="uppercase ">documentation</p>}
        </NavLink>
        <NavLink to="/tags" className="flex gap-3  pr-4 text-darkgray">
          <BsTag className="icon" />
          {!hide && <p className="uppercase ">tags</p>}
        </NavLink>
        <NavLink to="/users" className="flex gap-3  pr-4 text-darkgray">
          <CiUser className="icon" />
          {!hide && <p className="uppercase ">Users</p>}
        </NavLink>
        <NavLink to="/badges" className="flex gap-3  pr-4 text-darkgray">
          <BsBookmark className="icon" />
          {!hide && <p className="uppercase ">Badges</p>}
        </NavLink>
        <NavLink to="/ask-question" className="flex gap-3  pr-4 text-darkgray">
          <PiSpeakerHigh className="icon" />
          {!hide && <p className="uppercase ">Ask question</p>}
        </NavLink>

        <NavLink to="/stacks" className="flex gap-3  pr-4 text-darkgray">
          <FaStackExchange className="icon" />
          {!hide && <p className="uppercase ">stack exchange</p>}
        </NavLink>
        <NavLink to="/inbox" className="flex gap-3  pr-4 text-darkgray ">
          <FaInbox className="icon" />
          {!hide && (
            <p className="uppercase ">
              Inbox{" "}
              <span className="rounded-xl border border-orange px-1 text-orange text-xs">
                24
              </span>
            </p>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
