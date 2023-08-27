import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  IoMdHelpBuoy,
  IoMdDesktop,
  BsChevronDown,
} from "../icons/index";
import { DebounceInput } from "react-debounce-input";
import { List } from "react-content-loader";
const MyListLoader = () => <List />;

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchItem, setSearchItem] = useState();
  const [loading, setLoading] = useState(false);

  const searchData = async (searchText) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${encodeURIComponent(
          searchText
        )}&site=stackoverflow`
      );

      if (response.ok) {
        const data = await response.json();
        setSearchItem(data.items);
        console.log(data.items);
      } else {
        console.error("Error fetching data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    searchData(searchText);
  }, [searchText]);
  return (
    <div
      onClick={() => setSearchText("")}
      className="flex sm:px-2  px-10 items-center justify-between py-2"
    >
      <div className="flex gap-7 sm:gap-2">
        <img
          className="h-10 sm:h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Stack_Overflow.png?20210324193649"
          alt="Stackoverflowlogo"
        />

        {/* <AiOutlineMenu className="text-xl mt-4 text-lightgray" /> */}
        <div className="flex  items-center mt-1 gap-2 sm:border sm:rounded-md sm:px-1">
          <AiOutlineSearch className="text-lg font-bold text-lightgray mt-1" />
          <div className="flex flex-col relative">
            <DebounceInput
              debounceTimeout={500}
              type="text"
              placeholder="Search"
              className="outline-none  text-sm text-lightgray "
              onChange={(e) => setSearchText(e.target.value)}
            />

            <div className="w-[50vw] absolute sm:-left-8 top-5 z-20">
              {searchText !== "" && (
                <div
                  onClick={() => setSearchText("")}
                  className="bg-transparent"
                >
                  <div className="bg-white flex flex-col gap-2 p-5 border-x border-b rounded-b-md">
                    {loading && <MyListLoader />}
                    {searchItem?.slice(0, 10)?.map((item) => (
                      <Link
                        to={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="border-b text-gray transition-colors duration-500 hover:text-blue"
                        key={item.question_id}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 text-lightgray">
        <div className="flex gap-1 sm:hidden">
          <IoMdHelpBuoy className="mt-1" />
          <p className="text-sm">Help</p>
        </div>
        <div className="flex gap-1 sm:hidden">
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
