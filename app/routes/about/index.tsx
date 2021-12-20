import { Link } from "remix";

export default function About() {
    const bannerWidth = 1268;
    const bannerHeight = 624;
  return (
    <>
      <div className="p-8 pl-1 pr-1 md:pl-16 md:pr-16 md:p-16 lg:p-32 lg:pl-32 lg:pr-32 h-full">
        <div className="relative w-full" style={{ aspectRatio: `${bannerWidth} / ${bannerHeight}` }}>
            <img className="absolute w-full" src="/cover.jpg" />
            <div className="absolute bg-black/50 w-full h-full"></div>
            <div className="relative flex justify-end p-3 sm:p-6 lg:p-12 font-bold">
                <div className="w-full sm:w-5/6 lg:w-2/3 xl:w-1/2">
                    <h1 className="block text-white w-full text-right">
                        <span className="hidden sm:block text-5xl lg:text-5xl xl:text-6xl">Hey,</span>
                        <span className="hidden sm:block text-4xl lg:text-4xl xl:text-5xl mt-6 lg:mt-8">I'm Ben</span>

                        <span className="block sm:hidden text-3xl">Hey, I'm Ben</span>
                    </h1>
                    <p className="text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl mt-5 sm:mt-8 lg:mt-10 xl:mt-16  block text-white w-full text-right">I build <span className="bg-fuchsia-400/50">delightful user experiences</span> that are fast, accessible, responsive, and maintainable.  I also try to <span className="bg-indigo-400/50">enable others</span> to do the same</p>
                </div>
            </div>
        </div>
        <div className="flex mt-16 text-xl">
            <div className="flex-1 pr-4 text-gray-800">
                <p>
                    I grey up in Petrolia, ON, Canada where I fit perfectly into the nerdy high-school kid stereotype.  My passion for coding started in Grade 10 when Mrs. Ruypers helped me discover the thrill of problem solving with a computer.
                </p>
                <p className="mt-16">
                    I moved to Kitchener, ON for school where I went to <a className="underline" target="_blank" rel="noopener noreferrer" href="http://blogs1.conestogac.on.ca/news/2015/06/conestoga_students_win_at_nati.php">Conestoga College</a> for Software Engineering Technology.  Since then I built a 6-year career specializing in frontend development.  My recent experience includes leading frontend development at Postmedia I/O, starting my own consulting company, and most recently working as a Senior Software Developer at ApplyBoard Inc.
                </p>
            </div>
            <div className="flex-1 pl-4">
                <img src="/petrolia.jpg" />
                <img className="mt-16" src="/kitchener.jpg" />
            </div>
        </div>

        <h2 className="text-4xl text-center mt-24 text-gray-800">Values</h2>
        <div className="flex gap-8">
            <div className="flex-1">
                <h3 className="text-3xl text-center mt-16 text-gray-800 font-bold mb-8">Be Kind</h3>
                Kindness is a good enough value by itself, but kindness also helps get things done.  Building great relationships with people around you makes you more effective.
                <ul className="mt-8">
                    <li><span className="font-bold">Default to trust.</span>  It's better to give people trust upfront instead of making them prove themselves.  This helps make people feel psychological safe and enables them to do their best work</li>
                    <li className="mt-4"><span className="font-bold">Assume good intent.</span>  People almost always have good intentions behind their actions.  If something someone does seems surprising, assume good intent and hold your judgement until you see their perspective and constraints.</li>
                    <li className="mt-4"><span className="font-bold">Blame processes instead of people.</span>  It's more effective to blame and improve faulty processes (or tooling) than to blame individuals.</li>
                </ul>
            </div>
            <div className="flex-1">
                <h3 className="text-3xl text-center mt-16 text-gray-800 font-bold mb-8">Be Professional</h3>
                Kindness is a good enough value by itself, but kindness also helps get things done.  Building great relationships with people around you makes you more effective.
                <ul className="mt-8">
                    <li><span className="font-bold">Take pride in your work.</span>  It's better to give people trust upfront instead of making them prove themselves.  This helps make people feel psychological safe and enables them to do their best work</li>
                    <li className="mt-4"><span className="font-bold">Push back.</span>  People almost always have good intentions behind their actions.  If something someone does seems surprising, assume good intent and hold your judgement until you see their perspective and constraints.</li>
                    <li className="mt-4"><span className="font-bold">Refine your craft and never stop learning.</span>  It's more effective to blame and improve faulty processes (or tooling) than to blame individuals.</li>
                </ul>
            </div>
            <div className="flex-1">
                <h3 className="text-3xl text-center mt-16 text-gray-800 font-bold mb-8">Be Impactful</h3>
                Kindness is a good enough value by itself, but kindness also helps get things done.  Building great relationships with people around you makes you more effective.
                <ul className="mt-8">
                    <li><span className="font-bold">Default to trust.</span>  It's better to give people trust upfront instead of making them prove themselves.  This helps make people feel psychological safe and enables them to do their best work</li>
                    <li className="mt-4"><span className="font-bold">Assume good intent.</span>  People almost always have good intentions behind their actions.  If something someone does seems surprising, assume good intent and hold your judgement until you see their perspective and constraints.</li>
                    <li className="mt-4"><span className="font-bold">Blame processes instead of people.</span>  It's more effective to blame and improve faulty processes (or tooling) than to blame individuals.</li>
                </ul>
            </div>
        </div>

        <h2 className="text-4xl text-center mb-16 mt-24 text-gray-800">Reading</h2>
        <p>I love reading.  I think it's underrated.  When we read we see the world through other's eyes, not just our own.  It's the best way to refine your craft.  Below is my curation of books and articles I've read and some notes / comments.</p>
        <div className="flex gap-8">
            <div className="flex-1">
                <h2 className="text-3xl text-center mt-16 text-gray-800">Book Notes</h2>
                <ul>
                    <li>The Clean Coder</li>
                    <li>The Manager's Path</li>
                    <li>An Astronaut's Guide to Life on Earth</li>
                    <li>Elon Musk</li>
                    <li>The Ride of a Lifetime</li>
                    <li>SCRUM</li>
                    <li>Losing the Signal</li>
                    <li>The Martian</li>
                    <li>Steve Jobs</li>
                    <li>The Hitchhiker's Guide to the Galaxy</li>
                </ul>
            </div>
            <div className="flex-1">
                <h2 className="text-3xl text-center mt-16 text-gray-800">Article Notes</h2>
                <ul>
                    <li>The Clean Coder</li>
                    <li>The Manager's Path</li>
                    <li>An Astronaut's Guide to Life on Earth</li>
                    <li>Elon Musk</li>
                    <li>The Ride of a Lifetime</li>
                    <li>SCRUM</li>
                    <li>Losing the Signal</li>
                    <li>The Martian</li>
                    <li>Steve Jobs</li>
                    <li>The Hitchhiker's Guide to the Galaxy</li>
                </ul>
            </div>
        </div>

        <h2 className="text-4xl text-center mb-16 mt-24 text-gray-800">Writing</h2>
        <p>
            I also write.  Writing, like teaching, is the best way to figure out if you've truly internalized your understanding of a topic.
        </p>
        <p>
            I also subscribe to the idea of a <a href="https://joelhooks.com/on-writing-more">digital garden</a>.  The continuously tend to and prune articles I write to prevent them from becoming stale.
        </p>
        <h2 className="text-4xl text-center mt-16 text-gray-800 mb-16">Consulting</h2>
        <p className="mb-8 text-center">I currently only take projects that are both well-paid and interesting.  If your project fits that criteria, you can pitch it to me here:</p>
        <div className="flex justify-center">
            <div className="bg-slate-200 text-gray-800 p-8 font-bold text-xl text-center w-1/2">
                consulting@lorantfy.com
                <div>(please provide details in the first email)</div>
            </div>
        </div>
        <div className="pt-20"></div>

        {/* <h3 className="text-3xl text-center mt-16 text-gray-800">Be Kind</h3>
        <ul>
            <li>Default to trust</li>
            <li>Assume good intent</li>
            <li>Blame processes instead of people</li>
        </ul>
        <h2>Be Professional</h2>
        <ul>
            <li>Take pride in your work</li>
            <li>Don't sacrifice on the important things</li>
            <li>Push back</li>
            <li>Refine your craft and never stop learning</li>
        </ul>
        <h2>Be Impactful</h2>
        <ul>
            <li>Help others</li>
            <li>Work somewhere you can make a difference</li>
            <li>Or work for yourself</li>
        </ul> */}

        {/* <h1 className="text-4xl text-gray-800 mb-8">Work</h1>
        <JobEntry
            dateRange="Dec 2020 - Present · 1 yr 1 mo"
            logo="/applyboard.png"
            title="Senior Software Developer"
            companyName="ApplyBoard Inc."
        />
        <JobEntry
            dateRange="Jan 2020 - Dec 2020 · 1 yr"
            logo="/lorantfy.png"
            title="Software Consultant"
            companyName="Lorantfy Inc."
        />
        <JobEntry
            dateRange="Oct 2018 - Dec 2019 · 1 yr 3 mos"
            logo="/postmedia.jpg"
            title="Lead Frontend Developer"
            companyName="Postmedia Network Inc."
        />
        <JobEntry
            dateRange="May 2017 - Oct 2018 · 1 yr 6 mos"
            logo="/postmedia.jpg"
            title="Frontend Developer"
            companyName="Postmedia Network Inc."
        />
        <JobEntry
            dateRange="Jun 2015 - May 2016 · 1 yr"
            logo="/brose.jpg"
            title="Software Developer"
            hideDivider
            companyName="Brose Inc."
        /> */}
      </div>
    </>
  );
}

// function JobEntry(props: { logo: string, title: string, companyName: string, dateRange: string, hideDivider?: boolean }) {
//    return (
//         <div>
//             <div className="flex items-center">
//                 <div className="h-8 w-20">
//                     <img src={props.logo} className="h-full" />
//                 </div>
//                 <div>
//                     <h2 className="text-3xl text-gray-600">{props.title}</h2>
//                 </div>
//             </div>
//             <div className="flex items-start">
//                 {!props.hideDivider && <div className="bg-gray-300 h-12 ml-6 mt-4 mb-4" style={{ width: "2px" }}></div>}
//                 <div className={props.hideDivider ? "ml-20" : "ml-14"}>
//                     <div className="text-xl text-gray-600">{props.companyName}</div>
//                     <div className="text-gray-600">{props.dateRange}</div>
//                 </div>
//             </div>
//         </div>
//    ) 
// }