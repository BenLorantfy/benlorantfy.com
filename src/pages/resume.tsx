import clsx from "clsx";
import Head from "next/head";
import type { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ben Lorantfy | Resume</title>
      </Head>
      {/* <Nav /> */}
      <div
        className="m-auto min-h-full max-w-full print:w-full flex mt-16 print:mt-0"
        style={{
          width: "8.5in",
          boxShadow:
            "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
        }}
      >
        <article className="p-[0.4in] w-1/3 bg-[#f0f5fc]">
          <h1
            id="main-header"
            className="text-[rgb(66,134,222)] text-4xl font-bold mb-8"
          >
            Ben
            <br />
            Lorantfy
          </h1>
          <section className="border-2 border-[rgb(66,134,222)] p-4 -mr-4 -ml-4">
            <h2 className="text-[rgb(66,134,222)] -mt-7 mb-1">
              <span className="bg-[#f0f5fc] pl-1 pr-2">Summary</span>
            </h2>
            <ul>
              <li className="text-sm mb-2">
                9+ years of professional software engineering experience
              </li>
              <li className="text-sm mb-2">
                ~4 years of technical leadership experience
              </li>
              <li className="text-sm mb-2">
                11+ years of javascript/typescript experience
              </li>
              <li className="text-sm mb-2">7+ years of react experience</li>
            </ul>
          </section>
          <section>
            <h2 className="text-[rgb(66,134,222)] mt-8 mb-2">Awards</h2>
            <p className="">Skills Canada Web Development Gold Medal</p>
            <p className=" mt-4">Conestoga Co-Op Student of the Year Award</p>
          </section>
          <section>
            <h2 className="text-[rgb(66,134,222)] mt-8 mb-2">Open Source</h2>
            <p className="">nestjs-zod</p>
            <a
              className="break-all text-xs text-[rgb(66,134,222)] underline"
              href="https://github.com/reduxjs/nestjs-zod"
            >
              https://github.com/reduxjs/nestjs-zod
            </a>
            <p className="mt-4">@knapsack-pro/vitest</p>
            <a
              className="break-all text-xs text-[rgb(66,134,222)] underline"
              href="https://github.com/KnapsackPro/knapsack-pro-js/tree/main/packages/vitest"
            >
              https://github.com/KnapsackPro/knapsack-pro-js/tree/main/packages/vitest
            </a>
            <p className="mt-4">cra-template-redux</p>
            <a
              className="break-all text-xs text-[rgb(66,134,222)] underline"
              href="https://github.com/reduxjs/cra-template-redux"
            >
              https://github.com/reduxjs/cra-template-redux
            </a>
            <p className="mt-4">cra-template-redux-typescript</p>
            <a
              className="break-all text-xs text-[rgb(66,134,222)] underline"
              href="https://github.com/reduxjs/cra-template-redux-typescript"
            >
              https://github.com/reduxjs/cra-template-redux-typescript
            </a>
            <p className="mt-4">redux-injectors</p>
            <a
              className="break-all text-xs text-[rgb(66,134,222)] underline"
              href="https://github.com/react-boilerplate/redux-injectors"
            >
              https://github.com/react-boilerplate/redux-injectors
            </a>
            <div className="mt-4 hidden print:inline" />
            <p className="mt-4">DefinitelyTyped contributions</p>
            <a
              className="break-all text-xs text-[rgb(66,134,222)] underline"
              href="https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is%3Apr+author%3ABenLorantfy"
            >
              https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is%3Apr+author%3ABenLorantfy
            </a>
          </section>
        </article>
        <main className="p-[0.4in] w-2/3" aria-labelledby="main-header">
          <h2 className="text-[rgb(66,134,222)] text-md font-bold mb-2">
            Experience
          </h2>
          <ExperienceEntry
            companyName="ApplyBoard Inc."
            domainName="Application Processing Domain / UI Engineering"
            positions={[
              {
                title: "Staff Software Developer",
                endDate: "Present",
                startDate: "Dec 2021",
                duration: "2 yr, 10 mos",
              },
              {
                title: "Senior Software Developer",
                endDate: "Dec 2020",
                startDate: "Dec 2021",
                duration: "1 yr",
              },
            ]}
            points={[
              "Lead frontend development on the Core team, responsible for our primary business activity of application processing",
              "Part-time member of the UI Engineering team, contributing to the organization's frontend platform and standards",
            ]}
            keyAccomplishments={[
              "Lead a UI/UX revamp project for an 8-year old business-critical page",
              "Built a workflow designer from the ground up, automating application processing and cutting turn around time from several days to a few hours",
              "Founded our organization's accessibility community of practice and helped write our accessibility standards",
              "Decreased bundle size by 60%, decreased build time by 66%",
              "Co-created the organization's design system",
            ]}
            chips={["react", "redux", "typescript"]}
          />
          <ExperienceEntry
            companyName="Lorantfy Inc."
            positions={[
              {
                title: "Software Consultant",
                startDate: "Jan 2020",
                endDate: "Dec 2020",
                duration: "1 yr",
              },
            ]}
            points={[
              "Consulted with various clients, with a focus on improving accessibility compliance and mobile responsiveness",
            ]}
            chips={["react", "redux", "typescript", "WCAG"]}
          />
          <ExperienceEntry
            companyName="Postmedia Network Inc."
            domainName="Postmedia I/O"
            positions={[
              {
                title: "Frontend Tech Lead",
                endDate: "Dec 2019",
                startDate: "Oct 2018",
                duration: "1 yr 3 mos",
              },
              {
                title: "Frontend Developer",
                endDate: "Oct 2018",
                startDate: "May 2017",
                duration: "1 yr 6 mos",
              },
            ]}
            points={[
              "Oversaw and contributed to front-end development of highly depended on web applications",
              "Worked closely with product and design teams to create responsive, accessible, well-tested, and performant user experiences",
              "Maintained frontend infrastructure including webpack, babel, jest, eslint, and other tools",
              "Also worked on back-end services and deploy pipelines using node.js, docker, AWS, ECS, CircleCI, and other technologies",
            ]}
            keyAccomplishments={[
              "Helped create an internal ordering system that reliably handles hundreds of orders a day",
              "Helped create an advertising analytics platform, providing insights for sales people and a few thousand Postmedia clients",
              "Created and maintained an internal component library for use across projects",
              "Reduced bundle size from 25mb to 4mb",
              "Initiated and oversaw long-term technical initiatives, including migrating a project to typescript, upgrading from react 15 to react 16, and others",
            ]}
            chips={["react", "redux", "typescript"]}
          />
          <ExperienceEntry
            companyName="Brose Canada Inc."
            positions={[
              {
                title: "Software Developer",
                endDate: "May 2016",
                startDate: "Jun 2015",
                duration: "1 yr",
              },
            ]}
            points={[
              "Independently designed, built, deployed, and maintained QPT (quality process tool) that streamlined and optimized the QA process in the London plant's production line, which has since been expanded to multiple plants",
            ]}
            chips={["C#", ".Net", "MSSQL", "typescript"]}
          />
          <h3 className="text-[rgb(66,134,222)] text-xl mb-1 mt-8">Other</h3>
          <p>
            Additional experience includes co-ops and early roles at SixFactors
            Inc. and Rivison Inc.{" "}
            <span className="text-sm text-slate-500">(~7 mos)</span>
          </p>
          <Chip label="react" />
          <Chip label="angular" />
          <Chip label="cordova" />
          <h2 className="text-[rgb(66,134,222)] text-md font-bold mt-8 mb-2">
            Education
          </h2>
          <h3 className="text-[rgb(66,134,222)] text-xl mb-1">
            Software Engineering Tech. (B. Tech)
          </h3>
          <div className={"text-lg mb-4"}>
            McMaster University, Hamilton, ON{" "}
            <span className="text-sm text-slate-500">(2019 - 2024)</span>
          </div>
          <h3 className="text-[rgb(66,134,222)] text-xl mb-1">
            Software Engineering Tech. (Adv. Diploma)
          </h3>
          <div className={"text-lg"}>
            Conestoga College, Kitchener, ON{" "}
            <span className="text-sm text-slate-500">(2013 - 2017)</span>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

function ExperienceEntry(props: {
  companyName: string;
  domainName?: string;
  positions: Array<{
    title: string;
    startDate: string;
    endDate: string;
    duration: string;
  }>;
  chips: string[];
  points: string[];
  keyAccomplishments?: string[];
}) {
  return (
    <div className="mb-8">
      <h3 className="text-[rgb(66,134,222)] text-xl mb-1">
        {props.companyName}
        {props.domainName ? ` (${props.domainName})` : ""}
      </h3>
      <section>
        {props.positions.map((position, idx) => (
          <>
            {idx !== 0 && <ProgressLine />}
            <div
              key={idx}
              className={clsx({ "text-lg": idx === 0, "mb-1": idx !== 0 })}
            >
              <ProgressCircle /> {position.title}{" "}
              <span className="text-sm text-slate-500">
                ({position.startDate} - {position.endDate} · {position.duration}
                )
              </span>
            </div>
          </>
        ))}
        {/* <div className='text-lg mb-1'><ProgressCircle /> Staff Software Developer <span className='text-sm text-slate-500'>(December 2021 - Present)</span></div>
                <ProgressLine />
                <div><ProgressCircle /> Senior Software Developer <span className='text-sm text-slate-500'>(December 2020 - December 2021)</span></div> */}
        <div className="mt-1">
          {props.chips.map((chip) => (
            <Chip key={chip} label={chip} />
          ))}
        </div>
        <div className="text-sm mt-3">
          <ul className="list-disc ml-3">
            {props.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {props.keyAccomplishments && (
            <div className="bg-[#f0f5fc] p-4 mt-6 border border-[rgb(66,134,222)]">
              <h4 className="-mt-7 font-bold">
                <span className="inline-block origin-center rotate-2 bg-[#f0f5fc] pl-2 pr-2 pt-1 pb-1 border-2 border-[rgb(66,134,222)] text-[rgb(66,134,222)]">
                  Key Accomplishments
                </span>
              </h4>
              <ul className="list-disc ml-3 mt-3">
                {props.keyAccomplishments.map((keyAccomplishment) => (
                  <li key={keyAccomplishment}>{keyAccomplishment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ProgressLine() {
  return (
    <div className="border-l-2 border-[rgb(66,134,222)] h-3 absolute -ml-[13px] -mt-[8px]"></div>
  );
}

function ProgressCircle() {
  return (
    <div className="rounded-full bg-[rgb(66,134,222)] w-2 h-2 inline-block absolute -ml-4 mt-[9px]"></div>
  );
}

function Chip(props: { label: string }) {
  return (
    <div className="inline-block pl-1 pr-1 pt-[2px] pb-[2px] mr-1 rounded text-white text-xs bg-[rgb(66,134,222)]">
      {props.label}
    </div>
  );
}

export default Resume;
