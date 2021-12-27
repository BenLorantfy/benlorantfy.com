import { Link, useLoaderData } from "remix";
import * as blameToolingNotPeople from "./__posts/blame-tooling-not-people.mdx";
import * as amateursTalkImplementationProfessionalsTalkInterfaces from "./__posts/amateurs-talk-implementation-professionals-talk-interfaces.mdx";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

function postFromModule(mod: { filename: string, attributes: { meta: {} } }) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...(mod.attributes.meta as { title: string, image: string, description: string })
  };
}

export function loader() {
  return [
    postFromModule(blameToolingNotPeople),
    postFromModule(amateursTalkImplementationProfessionalsTalkInterfaces)
  ];
}

export default function Index() {
  const posts = useLoaderData<ReturnType<typeof loader>>();

  return (
    <>
      <div className="min-h-full flex flex-col">
        <Nav />
        <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44 flex flex-col md:flex-row-reverse flex-1 md:justify-between items-center">
          <div className="rounded-full overflow-hidden flex-shrink-0 w-1/2 md:w-4/12 xl:w-1/4 mb-16 md:mb-0 ">
            <img className="w-full" alt="" src="/profile-picture.jpg"></img>
          </div>
          <div className="md:pr-20 xl:pr-44">
            <h1 className="text-4xl text-gray-800">Hey, I'm Ben <span aria-hidden>👋</span></h1>
            <p className="text-3xl mt-8 text-gray-700">I build <span className="bg-fuchsia-200">delightful user experiences</span> that are fast, accessible, responsive, and maintainable.  I also try to <span className="bg-indigo-200">enable others</span> to do the same</p>
            <div className="mt-8 md:mt-16">
              <Link 
                to="/about" 
                prefetch="render" 
                className="inline-block after:relative after:h-px after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0 focus:after:w-full focus:after:left-0 after:transition-all after:bg-black after:block pb-4 pt-4 pl-4 pr-4 -ml-4"
              >
                More About Ben <span aria-hidden>»</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44 min-h-full">
        <div className="mb-8 md:mb-16 flex justify-between items-center w-full">
          <h2 className="text-4xl text-gray-800" id="blog">Blog</h2>
        </div>
        <div className="flex flex-wrap gap-8 items-start">
          {posts.map((post) => (
            <Link 
              prefetch="intent" 
              to={`/${post.slug}`}
              className="inline-block w-full md:w-96 bg-neutral-100 rounded-xl align-top"
              aria-labelledby={`post-title-${post.slug}`}
            >
              <div id={`post-title-${post.slug}`} className="mt-2 p-4 text-2xl">{post.title}</div>
              <img alt="" src={post.image} />
              <div className="mt-2 p-4">{post.description}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44 min-h-full mt-16 md:mt-32">
        <div className="mb-8 md:mb-16 flex justify-between items-center">
          <h2 className="text-4xl text-gray-800" id="portfolio">Portfolio</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <img className="block mb-10 md:mb-0 w-full md:w-1/2" alt="" src="/fpadvisor.png"></img>
          <div>
            <h3 className="text-3xl font-bold mb-8"><span role="text">FP Advisor <span className="text-gray-700 font-normal">Case Study</span></span></h3>
            <p className="mb-4">FP Advisor is Canada’s largest database of corporate information.  It's a product of the same team behind the Financial Post. It’s a useful resource, but because of the age of the website it had various accessibility concerns and was beginning to look outdated.</p>
            <p className="mb-4">I was consulted at the beginning of the project to do some initial setup work.  I created a good project structure, created some layouts, and added some accessible components (such as textboxes, navs, footers, etc.)</p>
            <p>The new site looks great on both mobile and desktop and is very accessible.  It has accessibility features such as a “Skip Navigation” button, all the interactive controls have focus states and labels, and the complex widgets are built with the latest accessibility best practices. </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-start mt-16 md:mt-32">
          <img className="block mb-10 md:mb-0 w-full md:w-1/2" alt="" src="/postmediahub.png"></img>
          <div>
            <h3 className="text-3xl font-bold mb-8 ">
              <span role="text">Postmedia Hub <span className="text-gray-700 font-normal">Case Study</span></span>
            </h3>
            <p className="mb-4">Postmedia Hub is a marketing analytics platform included free of charge to any Postmedia Marketing customer.  I've consulted with various projects related to The Hub including helping make it mobile friendly and accessible.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
