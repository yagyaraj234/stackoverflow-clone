import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsHandThumbsUp, BsChatLeft, BsEye } from "../icons/index";

const Question = () => {
  const [data, setData] = useState();
  const apiUrl =
    "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow";
  const fetchData = () => {
    axios.get(apiUrl).then((res) => {
      // console.log(res.data.items);
      setData(res.data.items);
    });
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <div className="text-justify w-full z-0 ">
      {/* Head title */}
      <div className="text-8xl text-lightgray relative my-2 px-10">
        <p className="opacity-20">top</p>
        <p className="text-3xl text-darkgray font-bold absolute top-10">
          Question
        </p>
      </div>
      {/* page subheader  */}
      <div className="text-xs text-darkgray flex gap-8 border-b py-5 px-10">
        <li className="bg-orange text-white p-1 px-2 font-semibold rounded-2xl">
          interesting
        </li>
        <li className="p-1 px-2 font-semibold rounded-2xl active:bg-orange active:text-white">
          featured
        </li>
        <li className="p-1 px-2 font-semibold rounded-2xl active:bg-orange active:text-white">
          hot
        </li>
        <li className="p-1 px-2 font-semibold rounded-2xl active:bg-orange active:text-white">
          week
        </li>
        <li className="p-1 px-2 font-semibold rounded-2xl active:bg-orange active:text-white">
          month
        </li>
      </div>
      {data?.map((item) => (
        <div
          className="flex justify-between py-5 border-b px-10"
          key={item.question_id}
        >
          <div className="flex flex-col gap-2">
            <Link
              to={item.link}
              target="_blank"
              rel="norefferer"
              className="text-sm text-blue font-semibold"
            >
              {item.title}
            </Link>
            <div className="flex text-xxs gap-3 text-lightgray">
              {item.tags.map((tag, index) => (
                <p
                  key={index}
                  className="px-1 h-4 border border-lightgray rounded-xl"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div>
              <p className="text-xs text-lightgray">
                modified 1 min ago{" "}
                <span className="text-semibold text-darkgray">
                  {item.owner.display_name}
                </span>
              </p>
            </div>
          </div>

          <div className="flex gap-5 text-darkgray text-sm">
            <div className="flex gap-2 flex-col items-center">
              <p>{item.score}</p>
              <p>votes</p>
              <BsHandThumbsUp className="text-md" />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p>{item.answer_count}</p>
              <p>answer</p>
              <BsChatLeft className="text-md" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>{item.view_count}</p>
              <p>views</p>
              <BsEye className="text-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
