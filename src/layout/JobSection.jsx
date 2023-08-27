import React from "react";
import { Button, Timeline } from "flowbite-react";
import { PiBagSimpleBold } from "react-icons/pi";

const jobs=[
  {}
]

const JobSection = () => {
  return (
    <div className="min-w-[25%] min-h-[100vh] bg-offwhite pl-5 relative right-0 top-0 z-10 sm:hidden">
      {/* Head title */}
      <div className="text-8xl text-lightgray relative my-2">
        <p className="opacity-20">Jobs</p>
        <p className="text-2xl text-darkgray font-bold absolute top-10">
          Looking out for...
        </p>
      </div>
      {/* Jobs Listing */}

      {/* <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="text-darkgray">
            <Timeline.Title className="text-sm text-blue">
              Front End Developer with Angular
            </Timeline.Title>
            <Timeline.Time>Wallet Hub</Timeline.Time>
            <Timeline.Body>
              <div className="flex flex-col">
                <div className="flex text-xxs">
                  <div className="border border-lightgray rounded-lg px-2">
                    <p>Washington, Dc</p>
                  </div>
                  <div className="border border-lightgray rounded-lg px-2">
                    <p>Remote</p>
                  </div>
                </div>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content className="text-darkgray">
            <Timeline.Title className="text-sm text-blue">
              Front End Developer with Angular
            </Timeline.Title>
            <Timeline.Time>Wallet Hub</Timeline.Time>
            <Timeline.Body>
              <div className="flex flex-col">
                <div className="flex text-xxs">
                  <div className="border border-lightgray rounded-lg px-2">
                    <p>Washington, Dc</p>
                  </div>
                  <div className="border border-lightgray rounded-lg px-2">
                    <p>Remote</p>
                  </div>
                </div>
              </div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
       */}
       
    </div>
  );
};

export default JobSection;
