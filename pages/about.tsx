import type { NextPage } from 'next'
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import cover from "../assets/cover.jpg";
import Image from 'next/image';
import kitchener from "../assets/kitchener.jpg";
import petrolia from "../assets/petrolia.jpg";

const Home: NextPage = () => {
  return (
    <>
            <Nav />
            <div className="sm:hidden">
                <div className="relative">
                    <div className="w-full brightness-50">
                        <Image alt="" layout="responsive" src={cover} />
                    </div>
                    <div className="absolute top-0 flex justify-end p-6 font-bold w-full">
                        <div className="relative w-full">
                            <h1 className="block text-white w-full text-right">
                                <span className="block text-3xl">Hey, I'm Ben</span>
                            </h1>
                            <p className="text-sm mt-5 block text-white w-full text-right">I build <span className="bg-fuchsia-400/50">delightful user experiences</span><br /> that are fast, accessible,<br /> responsive, and <br /> maintainable.  <br /><br /> I also try to <span className="bg-indigo-400/50">enable others</span><br /> to do the same</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block pl-8 pr-8 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44">
                <div className="relative w-full">
                    <div className='w-full brightness-50'>
                        <Image layout="responsive" src={cover} />
                    </div>

                    <div className="absolute top-0 flex justify-end p-3 sm:p-6 lg:p-12 font-bold">
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
            </div>
            <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44">
                <div className="flex mt-16 text-xl">
                    <div className="flex-1 pr-4 text-gray-800">
                        <p>
                            I grew up in Petrolia, ON, Canada.  My passion for coding started with the help of my Grade 10 computer science teacher Mrs. Ruypers.  My first programming language was Visual Basic - something about being able to build cool things by typing a few buttons on the keyboard was fascinating
                        </p>
                        <div className="block sm:hidden mt-8">
                            <Image layout='responsive' alt="Victoria Playhouse, Petrolia, Ontario" src={petrolia} />
                        </div>
                        <p className="mt-16">
                            I moved to Kitchener, ON for school where I went to Conestoga College for Software Engineering Technology.  Since then I've built a 6+ year career specializing in frontend development and <a className="underline" href="http://blogs1.conestogac.on.ca/news/2016/03/conestoga_honours_top_employer.php">won</a> <a className="underline" href="http://blogs1.conestogac.on.ca/news/2015/05/ontario_skills_2015.php">some</a> <a className="underline" href="http://blogs1.conestogac.on.ca/news/2015/06/conestoga_students_win_at_nati.php">awards</a>.  My recent experience includes leading frontend development at Postmedia I/O, starting my own consulting company, and most recently working as a Staff Software Developer at ApplyBoard Inc.
                        </p>
                        <p className="mt-16">
                            You can checkout my <a className="underline" href="https://www.linkedin.com/in/ben-lorantfy">linkedin here</a> for more info
                        </p>
                        <div className="block sm:hidden mt-8">
                            <Image layout='responsive' alt="Victoria Park, Kitchener, Ontario" src={kitchener} />
                        </div>
                    </div>
                    <div className="hidden sm:block flex-1 pl-4">
                        <Image alt="Victoria Playhouse, Petrolia, Ontario" src={petrolia} />
                        <div className="mt-16">
                            <Image alt="Victoria Park, Kitchener, Ontario" src={kitchener} />
                        </div>
                    </div>
                </div>

                <h2 className="text-4xl text-center mt-24 text-gray-800">Values</h2>
                <div className="flex gap-8 flex-col sm:flex-row">
                    <div className="flex-1">
                        <h3 className="text-3xl text-center mt-16 text-gray-800 font-bold mb-8">Be Kind</h3>
                        Kindness is a good enough value by itself, but kindness also helps get things done.  Building great relationships with people around you makes you more effective.
                        <ul className="mt-8">
                            <li><span className="font-bold">Default to trust.</span>  It's better to give people trust upfront instead of making them prove themselves.  This helps make people feel psychologically safe and enables them to do their best work</li>
                            <li className="mt-4"><span className="font-bold">Assume good intent.</span>  People almost always have good intentions behind their actions.  If something someone does seems surprising, assume good intent and hold your judgement until you see their perspective and constraints.</li>
                            <li className="mt-4"><span className="font-bold">Blame processes instead of people.</span>  It's more effective to blame and improve faulty processes (or tooling) than to blame individuals.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-3xl text-center mt-16 text-gray-800 font-bold mb-8">Be Professional</h3>
                        Software engineers should act the same way doctors or lawyers work.  They don't betray their ethics, values, or quality standards because of tight schedules.  Imagine if a doctor took a riskier move during a surgery because their manager said it was taking too long.
                        <ul className="mt-8">
                            <li><span className="font-bold">Take pride in your work.</span>  Professionals are able to send a link of their own code if needed to their peers and be proud of it.</li>
                            <li className="mt-4"><span className="font-bold">Push back.</span>  Professionals push back when a manager asks them to skip accessibility, automated tests, code review, etc.</li>
                            <li className="mt-4"><span className="font-bold">Refine your craft and never stop learning.</span>  Professionals try their best to keep on top of the latest best practices.</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-3xl text-center mt-16 text-gray-800 font-bold mb-8">Be Impactful</h3>
                        You can choose to work somewhere you're proud of and where you feel like you're making people's lives better.
                        <ul className="mt-8">
                            <li><span className="font-bold">Do big things.</span>  Do work that improves the lives of many other people</li>
                            <li className="mt-4"><span className="font-bold">Multiply your output.</span>  Try to find a way so every unit of work you do is multiplied by other people.  This allows you to have a bigger impact than you could working alone.  Be multiplicative instead of additive.</li>
                        </ul>
                    </div>
                </div>

                <div style={{ width: "100%", maxWidth: "845px", margin: "auto" }}>
                    <h2 className="text-4xl text-center mb-16 mt-24 text-gray-800">Reading</h2>
                    <p>When we read we see the world through other's eyes, not just our own.  It's the best way to refine your craft.  Below is my curation of books I've read and some notes / comments (still need to add my notes here 😅).</p>
                    <div className="flex gap-8" style={{ width: "100%", maxWidth: "845px", margin: "auto" }}>
                        <div className="flex-1">
                            <h2 className="text-3xl text-center mt-16 text-gray-800">Book Notes</h2>
                            <ul>
                                <li>Peopleware</li>
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
                    <p className="mt-8">
                        I also subscribe to the idea of a digital garden.  I try to continuously tend to and prune articles I write to prevent them from becoming stale.
                    </p>
                    <p className="mt-8">
                        Here's a couple featured articles:
                    </p>
                    <div className="mt-8">
                        {/* <BlogPostCard
                            slug={"biggest-news-of-2021-by-font-size"}
                            title={"The Biggest News of 2021 Measured by Font Size"}
                            description={"For the last year, I've been keeping track of the font size of the headlines on cnn.com"}
                            images={{
                                png: headlinesChartThumbnail,
                                png2x: headlinesChartThumbnail2x,
                                webp: headlinesChartThumbnailWebp,
                                webp2x: headlinesChartThumbnailWebp2x
                            }}
                        /> */}
                    </div>

                    <h2 className="text-4xl text-center mt-16 text-gray-800 mb-16">Consulting</h2>
                    <p className="mb-8">I currently only take projects that are both well-paid and interesting.  If your project fits that criteria, you can pitch it to me here (I'm especially interested in helping organizations become compliant with accessibility laws):</p>
                    <div className="flex justify-center">
                        <div className="bg-slate-200 text-gray-800 p-8 font-bold text:lg sm:text-xl text-center w-full md:w-3/4">
                            consulting@lorantfy.com
                            <div>(please provide details in the first email)</div>
                        </div>
                    </div>
            </div>

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
            <Footer />
        </>
  )
}

export default Home
