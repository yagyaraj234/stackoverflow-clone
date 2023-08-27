import { GoLocation } from "react-icons/go";
import { BiWorld } from "react-icons/bi";

const jobs = [
  {
    name: "Wallet Hub",
    type: "Front End Developer with Angular",
    location: "Washington, DC",
    jobtype: "Remote",
    skill1: "angular js",
    skill2: "cordova",
  },
  {
    name: "Perk.com INC",
    type: "Senior iOS / iPhone Engineer",
    location: "Bengaluru, India",
    jobtype: "In Office",
    skill1: "iOS",
    skill2: "iphone",
  },
  {
    name: "SparkNET Technologies",
    type: "Software Engineer",
    salary: "$25,000 - $40000",
    location: "No Location",
    jobtype: "Remote",
    skill1: "iOS",
    skill2: "ruby on rails",
  },
];

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

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {jobs?.map((job) => (
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-700 dark:bg-gray-300" />

            <h3 className=" font-semibold text-blue text-sm">{job.type}</h3>
            <p className="text-darkgray text-sm">{job.name}</p>

            <p className="text-xs text-green-500">{job?.salary}</p>
            <div className="flex gap-3 text-xs text-lightgray my-1">
              <div className="flex gap-1">
                <GoLocation className="mt-[2px]" />
                <p>{job.location}</p>
              </div>
              <div className="flex gap-1">
                <BiWorld className="mt-[2px]" />
                <p>{job.jobtype}</p>
              </div>
            </div>
            <div className="flex gap-3 text-xs text-lightgray my-2">
              <div className="flex gap-1 border border-lightgray px-2 rounded-2xl">
                <p>{job.skill1}</p>
              </div>
              <div className="flex gap-1 border border-lightgray px-2 rounded-2xl">
                <p>{job.skill2}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="text-blue text-sm uppercase">View all Jobs </p>
    </div>
  );
};

export default JobSection;
