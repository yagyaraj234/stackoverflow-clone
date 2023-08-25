import React from "react";
import { BiLogoTwitter, BiLogoFacebook } from "react-icons/bi";
import { TbNetwork } from "react-icons/tb";

const FooterList = ({ ...props }) => {
  let eight = props.eighth.split(" ");
  let eighth = eight[eight.length - 1];
  return (
    <ul className="flex flex-col gap-[6px]">
      <li>{props.first}</li>
      <li>{props.second}</li>
      <li>{props.third}</li>
      <li>{props.fourth}</li>
      <li>{props.fifth}</li>
      <li>{props.sixth}</li>
      <li>{props.seventh}</li>
      <li className={`${eighth === "more" && "font-semibold text-darkgray "}`}>
        {props.eighth}
      </li>
    </ul>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-col px-10 relative bottom-0 w-full">
      {/* Footer First Line  */}
      <div className="flex text-lightgray justify-between border-b border-lightgray  py-5 ">
        <div className="flex text-xs gap-2 list-none">
          <li>about us</li>
          <li>help</li>
          <li>blog</li>
          <li>chat</li>
          <li>data</li>
          <li>legal</li>
          <li>privacy policy</li>
          <li>work here</li>
          <li>advertising info</li>
          <li>mobile</li>
          <li>contact us</li>
          <li>feedback</li>
        </div>

        <div className="flex gap-2 text-gray">
          <BiLogoTwitter />
          <BiLogoFacebook />
          <TbNetwork />
        </div>
      </div>
      {/* Second line */}

      <div className="flex text-xs text-lightgray justify-between py-8 border-b border-lightgray">
        {/* First column of Footer  */}
        <div className="flex flex-col gap-3">
          <p className="uppercase">technology</p>
          <div className="flex gap-10 justify-between">
            <FooterList
              first="Stack Overflow"
              second="Server Fault"
              third="Super User"
              fourth="Web Application"
              fifth="Ask Ubuntu"
              sixth="Webmasters"
              seventh="Game Developement"
              eighth="Tex - Latex"
            />
            <FooterList
              first="Programmers"
              second="Unix & Linux"
              third="Ask Different"
              fourth="WordPress Developemt"
              fifth="Geographic Information Developement"
              sixth="Electrical Engineering"
              seventh="Android Enthusiasts"
              eighth="50 + more"
            />
          </div>
        </div>

        {/* Second Column of Footer  */}
        <div className="flex flex-col gap-3">
          <h1 className="uppercase">Life / arts</h1>
          <FooterList
            first="Photography"
            second="Science Fiction & Fantasy"
            third="Graphic Design"
            fourth="Movies & TV"
            fifth="Seasoned Advice"
            sixth="Home Improvement"
            seventh="Personal Finance & Money"
            eighth="19 more"
          />
        </div>

        {/* Third Column  */}
        <div className="flex flex-col gap-3">
          <p className="uppercase">Culture / Recreation</p>
          <FooterList
            first="English Language"
            second="Skeptics"
            third="Mi Yodeya (Judaism)"
            fourth="Travel"
            fifth="Christinity"
            sixth="Arqade (gaming)"
            seventh="Bicycles"
            eighth="21 more"
          />
        </div>

        <div className="flex flex-col gap-3">
          <p className="uppercase">Other</p>
          <FooterList
            first="English Language"
            second="Skeptics"
            third="Mi Yodeya (Judaism)"
            fourth="Travel"
            fifth="Christinity"
            sixth="Arqade (gaming)"
            seventh="Bicycles"
            eighth="21 more"
          />
        </div>
      </div>
      <div className="flex justify-between py-5 text-xxs text-gray-300 ">
        <p>
          site design/ logo &copy; 2016 Stack Exchange Inc; user contribution
          licensed under cc by-sa 3.0 with attribution required
        </p>
        <p>rev 2016.8.1.3852</p>
      </div>
    </div>
  );
};

export default Footer;
