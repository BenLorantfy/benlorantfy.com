import "./page.css";

import clsx from "clsx";
import Head from "next/head";
import type { NextPage } from "next";
import { Fragment } from "react";
import { PrintButton } from "./PrintButton";
import { GlobeIcon } from "~/icons/GlobeIcon";
import { MailIcon } from "~/icons/MailIcon";
import { GitHubIcon } from "~/icons/GitHubIcon";
import { LinkedInIcon } from "~/icons/LinkedInIcon";

const Resume: NextPage = () => {
  return (
    <div>
      <PrintButton />
      <div style={{
        width: "100vw",
        overflowX: "auto"
      }}>
        <Head>
          <title>Ben Lorantfy | Resume</title>
        </Head>
        <div
          className="m-auto min-h-full print:w-full flex mt-16 mb-16 print:mt-0 subpixel-antialiased"
          style={{
            width: "8.5in",
            boxShadow:
              "rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px",
            fontFamily: 'var(--font-montserrat)',
            position: "relative",
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
                  5+ years of technical leadership experience
                </li>
                <li className="text-sm mb-2">
                  12+ years of javascript/typescript experience
                </li>
                <li className="text-sm mb-2">7+ years of react experience</li>
              </ul>
            </section>
            <section>
              <h2 className="text-[rgb(66,134,222)] mt-8 mb-2">Contact</h2>
              <ul className="flex flex-col gap-2 text-[rgb(66,134,222)]">
                <li className="flex items-center gap-1 text-sm">
                  <MailIcon size="sm" />
                  <a href="mailto:ben@lorantfy.com" className="underline">ben@lorantfy.com</a>
                </li>
                <li className="flex items-center gap-1 text-sm">
                  <GlobeIcon size="sm" />
                  <a href="https://benlorantfy.com" className="underline">benlorantfy.com</a>
                </li>
                <li className="flex items-center gap-1 text-xs">
                  <GitHubIcon size="sm" />
                  <a href="https://github.com/benlorantfy" className="underline">github.com/benlorantfy</a>
                </li>
                <li className="flex items-center gap-1 text-xs">
                  <LinkedInIcon size="sm" />
                  <a href="https://linkedin.com/in/benlorantfy" className="underline">linkedin.com/in/benlorantfy</a>
                </li>
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
              positions={[
                {
                  title: "Staff Software Engineer",
                  endDate: "Present",
                  startDate: "Dec 2021",
                  duration: "3 yr, 7 mos",
                },
                {
                  title: "Senior Software Engineer",
                  endDate: "Dec 2021",
                  startDate: "Dec 2020",
                  duration: "1 yr",
                },
              ]}
              points={[
                "Leading a team of 3-4 frontend developers on the Core team, responsible for our primary business activity of application processing",
                "Part-time member of the UI Engineering team, helping to shape the organization's frontend platform and standards",
              ]}
              keyAccomplishments={[
                "Led a UI/UX revamp project for a 10-year old business-critical page, increasing conversion rate by 13%, developer productivity by 3-4x, and reducing WCAG violations by 90%",
                "Built a workflow designer from the ground up, automating application processing and reducing application processing time by 50% and growing",
                "Co-created the organization's design system, increasing developer productivity by 2-3x and improving WCAG compliance by ~80%",
                "Founded our organization's accessibility community of practice, helped write our accessibility standards, rolled out and administered accessibility training across the organization to 40+ people",
                "Created a web BFF (backend for frontend) that reliably handles 100k+ requests per day",
                "Decreased bundle size by 60% and build time by 66%",
              ]}
              chips={["react", "redux", "typescript", "nodejs", "nestjs"]}
            />
            <ExperienceEntry
              companyName="Conestoga College"
              positions={[
                {
                  title: "Part-time Professor",
                  startDate: "Jan 2023",
                  endDate: "Dec 2023",
                  duration: "1 yr",
                },
              ]}
              points={[
                "Taught courses called \"User Experience Evaluation\" and \"Software Engineering Fundamentals\"",
              ]}
              chips={[]}
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
                "Led front-end development of highly depended-upon web applications",
                "Worked closely with product and design teams to create responsive, accessible, well-tested, and performant user experiences",
                "Maintained frontend infrastructure including webpack, babel, jest, eslint, and other tools",
                "Also worked on back-end services and deploy pipelines using node.js, docker, AWS, ECS, CircleCI, and other technologies",
              ]}
              keyAccomplishments={[
                "Built an internal ordering system that reliably handles hundreds of orders a day",
                "Built an advertising analytics platform, providing insights for sales people and a few thousand Postmedia clients",
                "Created and maintained an internal component library for use across projects",
                "Reduced bundle size from 25mb to 4mb",
                "Initiated and oversaw long-term technical initiatives, including migrating a project to typescript, upgrading from react 15 to react 16, and others",
              ]}
              chips={["react", "redux", "typescript", "nodejs", "mongodb"]}
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
                "Independently designed, built, deployed, and maintained QPT (quality process tool).  This tool streamlined and optimized the QA process in the London plant's production line, which has since been expanded to multiple plants",
              ]}
              keyAccomplishments={[
                "Saved the plant an estimated $100k/year in increased efficiency",
                "Won \"Co-Op Student of the Year\" Award"
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
              Business Management (Certificate)
            </h3>
            <div className={"text-lg mb-4"}>
              Mohawk College, Hamilton, ON{" "}
              <span className="text-sm text-slate-500">(2024)</span>
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
      </div>
    </div>
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
          <Fragment key={idx}>
            {idx !== 0 && <ProgressLine />}
            <div
              key={idx}
              className={clsx({ "text-lg": idx === 0, "mb-1": idx !== 0 })}
            >
              {props.positions.length > 1 && <ProgressCircle />} {position.title}{" "}
              <span className="text-sm text-slate-500">
                ({position.startDate} - {position.endDate} · {position.duration}
                )
              </span>
            </div>
          </Fragment>
        ))}
        {/* <div className='text-lg mb-1'><ProgressCircle /> Staff Software Developer <span className='text-sm text-slate-500'>(December 2021 - Present)</span></div>
                <ProgressLine />
                <div><ProgressCircle /> Senior Software Developer <span className='text-sm text-slate-500'>(December 2020 - December 2021)</span></div> */}
        {props.chips.length > 0 && (
          <div className="mt-1 mb-2">
            {props.chips.map((chip) => (
              <Chip key={chip} label={chip} />
            ))}
          </div>
        )}
        <div className="text-sm mt-1">
          {props.points.length === 1 ? (
            <p>{props.points[0]}</p>
          ) : (
            <ul className="list-disc ml-3">
              {props.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
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
    <div className="inline-block pl-1 pr-1 pt-[2px] pb-[2px] mr-1 rounded-sm text-white text-xs bg-[rgb(66,134,222)]">
      {props.label}
    </div>
  );
}

export default Resume;