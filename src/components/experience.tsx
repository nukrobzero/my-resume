"use client";

import { Anchor, Briefcase, ChevronDown, Satellite } from "lucide-react";

const Experience = () => {
  const roadMapData = [
    {
      title: "Mahanakorn University of Technology 2020",
      educationLv: "Education Level	Bachelor's Degree",
      Faculty: "Computer Engineering",
      degree: "Bachelor of Engineering",
      gpa: "",
    },
    {
      title: "Chiang Klang Pracha Pattana School 2014",
      educationLv: "High School",
      Faculty: "",
      degree: "",
      gpa: "",
    },
  ];

  const workHisData = [
    {
      title: "Sumipol Corporation Limited",
      position: "Web Programmer",
      time: "December 2022 - Present",
      jobDuty:
        "Write/Fix website, SEO, WordPress, API, Intigation and google analytics",
    },
    {
      title: "Nichetel Communications",
      position: "System Engineer",
      time: "January 2021 - November 2022",
      jobDuty: "Fax Server Solution and Enterprise Content Management (ECM)",
    },
    {
      title:
        "THAI AIRWAYS INTERNATIONAL PUBLIC COMPANY LIMITED , MC TECHNICIAN DEPARTMENT, SUVARNABHUMI AIRPORT",
      position: "Assistant engineer-students internships",
      time: "April 2018 - June 2018",
      jobDuty:
        "Assigned by a Job Supervisor to daily tasks with In-flight Entertainment (IFE) and special operations on the Airbus A-380 (C-check)",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-start relative">
        <div className="absolute right-0 animate-pulse text-[#ffffff61] lg:text-white"><Satellite size={200} /></div>
        <div className="flex flex-col justify-center items-start !w-full">
          <span className="pb-2 flex flex-row justify-center items-center space-x-2">
            <span>
              <Anchor />
            </span>
            <h1 className="uppercase font-semibold text-start text-2xl">
              EDUCATION
            </h1>
          </span>
          <div className="py-4 flex flex-col justify-center items-start !w-full">
            {roadMapData.map((data, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-start !w-full"
              >
                <span className="cursor-default">
                  <h2 className="text-xl font-semibold uppercase">
                    {data.title}
                  </h2>
                  <p>
                    <span className="font-medium">Education Level:</span>&nbsp;
                    {data.educationLv}
                  </p>
                  <span className="flex flex-row justify-start items-center space-x-8">
                    {data.Faculty != "" ? (
                      <p>
                        <span className="font-medium">Faculty:</span>&nbsp;
                        {data.Faculty}
                      </p>
                    ) : (
                      ""
                    )}
                    {data.degree != "" ? (
                      <p>
                        <span className="font-medium">Degree:</span>&nbsp;
                        {data.degree}
                      </p>
                    ) : (
                      ""
                    )}
                  </span>
                  {/* <p>
                    <span className="font-medium">G.P.A.:</span>&nbsp;
                    {data.gpa}
                  </p> */}
                </span>
                {idx === roadMapData.length - 1 ? (
                  ""
                ) : (
                  <span className="space-y-2 py-4 flex flex-col justify-center items-center w-full lg:w-[620px]">
                    {Array.from({ length: 5 }, (_, index) => index).map(
                      (item) => (
                        <ChevronDown key={item} className="animate-ping" />
                      )
                    )}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="py-24 flex flex-col justify-center items-start">
          <span className="pb-2 flex flex-row justify-center items-center space-x-2">
            <span>
              <Briefcase />
            </span>
            <h1 className="uppercase font-semibold text-start text-2xl">
              Working / Internship Experience
            </h1>
          </span>
          <div className="py-4 flex flex-col justify-center items-start">
            {workHisData.map((data, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-start !w-full"
              >
                <span className="cursor-default">
                  <h2 className="text-xl font-semibold uppercase">
                    {data.title}
                  </h2>
                  <p>
                    <span className="font-medium">Position:</span>&nbsp;
                    {data.position}
                  </p>
                  <p>
                    <span className="font-medium">{data.time}</span>
                  </p>
                  <p>
                    <span className="font-medium">Job Duty:</span>&nbsp;
                    {data.jobDuty}
                  </p>
                </span>
                {idx === workHisData.length - 1 ? (
                  ""
                ) : (
                  <span className="space-y-2 py-4 flex flex-col justify-center items-center  w-full lg:w-[620px]">
                    {Array.from({ length: 5 }, (_, index) => index).map(
                      (item) => (
                        <ChevronDown key={item} className="animate-ping" />
                      )
                    )}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
