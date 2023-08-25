import React from "react";
// import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PiBagSimpleBold } from "react-icons/pi";

const JobSection = () => {
  return (
    <div className="min-w-[25%] min-h-[100vh] bg-offwhite pl-5 relative right-0 top-0 z-10">
      {/* Head title */}
      <div className="text-8xl text-lightgray relative my-2">
        <p className="opacity-20">Jobs</p>
        <p className="text-2xl text-darkgray font-bold absolute top-10">
          Looking out for...
        </p>
      </div>
      {/* Jobs Listing */}
      {/* <div>
        

        <VerticalTimeline
          animate={false}
          layout="1-column-left"
          lineColor="#B6BBC0"
          className="text-black border-none"
        >
          <VerticalTimelineElement
            contentStyle={{ background: "transparent", border: "none" }}
            contentArrowStyle={{ borderRight: "7px solid #91969b" }}
            iconStyle={{ color: "#91969b" }}
            icon={<PiBagSimpleBold className="text-xs" />}
            style={{ background: "transparent" }}
          >
            <h3 className="text-blue font-semibold text-sm">
              Front-End Developer with Angular
            </h3>
            <div className="flex">
              <div className="flex gap-5">
                <p>Washington, DC</p>
              </div>
              <div className="flex">
                <p>Remote</p>
              </div>
            </div>
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div> */}
    </div>
  );
};

export default JobSection;
