import { Link, useLoaderData } from "remix";
import * as blameToolingNotPeople from "./__posts/blame-tooling-not-people.mdx";
import * as amateursTalkImplementationProfessionalsTalkInterfaces from "./__posts/amateurs-talk-implementation-professionals-talk-interfaces.mdx";
import * as biggestNewsOf2021ByFontSize from "./__posts/biggest-news-of-2021-by-font-size.mdx";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";
import profilePicture from '~/images/profile-picture.jpg';
import fpAdvisor from '~/images/fpadvisor.png';
import postmediahub from '~/images/postmediahub.png';

import headlinesChartThumbnail from "~/images/post-thumbnails/headlines-chart.png";
import headlinesChartThumbnail2x from "~/images/post-thumbnails/headlines-chart@x2.png";
import headlinesChartThumbnailWebp from "~/images/post-thumbnails/headlines-chart.webp";
import headlinesChartThumbnailWebp2x from "~/images/post-thumbnails/headlines-chart@x2.webp";

import logisticsThumbnail from "~/images/post-thumbnails/logistics.jpg";
import logisticsThumbnail2x from "~/images/post-thumbnails/logistics@x2.jpg";
import logisticsThumbnailWebp from "~/images/post-thumbnails/logistics.webp";
import logisticsThumbnailWebp2x from "~/images/post-thumbnails/logistics@x2.webp";

import toolsThumbnail from "~/images/post-thumbnails/tools.jpg";
import toolsThumbnail2x from "~/images/post-thumbnails/tools@x2.jpg";
import toolsThumbnailWebp from "~/images/post-thumbnails/tools.webp";
import toolsThumbnailWebp2x from "~/images/post-thumbnails/tools@x2.webp";
import { BlogPostCard } from "~/components/BlogPostCard";

function postFromModule(mod: { filename: string, attributes: { image: string, meta: {} } }, images?: { png?: string, png2x?: string, jpg?: string, jpg2x?: string, webp?: string, webp2x?: string }) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    images,
    ...(mod.attributes.meta as { title: string, description: string })
  };
}

export function loader() {
  return [
    postFromModule(biggestNewsOf2021ByFontSize),
    postFromModule(blameToolingNotPeople, { png: "/post-images/tools.jpg" }),
    postFromModule(amateursTalkImplementationProfessionalsTalkInterfaces, { jpg: "/post-images/logistics.jpg" })
  ];
}

/**
 * Adds images to the list of posts
 *
 * @note remix only includes images in the bundle if they are imported into
 * client-side code, so we can't move this code to `loader`
 */
function usePostsWithImages(posts: Array<ReturnType<typeof postFromModule>>) {
  return posts.map((post) => {
    if (post.slug === 'biggest-news-of-2021-by-font-size') {
      return {
        ...post,
        images: {
          png: headlinesChartThumbnail,
          png2x: headlinesChartThumbnail2x,
          webp: headlinesChartThumbnailWebp,
          webp2x: headlinesChartThumbnailWebp2x
        }
      }
    }

    if (post.slug === 'amateurs-talk-implementation-professionals-talk-interfaces') {
      return {
        ...post,
        images: {
          jpg: logisticsThumbnail,
          jpg2x: logisticsThumbnail2x,
          webp: logisticsThumbnailWebp,
          webp2x: logisticsThumbnailWebp2x
        }
      }
    }

    if (post.slug === 'blame-tooling-not-people') {
      return {
        ...post,
        images: {
          jpg: toolsThumbnail,
          jpg2x: toolsThumbnail2x,
          webp: toolsThumbnailWebp,
          webp2x: toolsThumbnailWebp2x
        }
      }
    }

    return post;
  });
}

export default function Index() {
  const posts = useLoaderData<ReturnType<typeof loader>>();
  const postsWithImages = usePostsWithImages(posts);

  return (
    <>
      <div className="min-h-full flex flex-col">
        <Nav />
        <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44 flex flex-col md:flex-row-reverse flex-1 md:justify-between items-center">
          <div className="rounded-full overflow-hidden flex-shrink-0 w-1/2 md:w-4/12 xl:w-1/4 mb-16 md:mb-0 ">
            <img className="w-full" alt="" src={profilePicture}></img>
          </div>
          <div className="md:pr-20 xl:pr-44">
            <h1 className="text-4xl text-gray-800">Hey, I'm Ben <span aria-hidden>👋</span></h1>
            <p className="text-3xl mt-8 text-gray-700"><span role="text">I build <span className="bg-fuchsia-200">delightful user experiences</span> that are fast, accessible, responsive, and maintainable.  I also try to <span className="bg-indigo-200">enable others</span> to do the same</span></p>
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
          {postsWithImages.map((post) => (
            post.images && (
              <BlogPostCard
                slug={post.slug}
                title={post.title}
                description={post.description}
                images={post.images}
              />
            )
          ))}
        </div>
      </div>
      <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44 min-h-full mt-16 md:mt-32">
        <div className="mb-8 md:mb-16 flex justify-between items-center">
          <h2 className="text-4xl text-gray-800" id="portfolio">Portfolio</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <img className="block mb-10 md:mb-0 w-full md:w-1/2" alt="" src={fpAdvisor}></img>
          <div>
            <h3 className="text-3xl font-bold mb-8"><span role="text">FP Advisor <span className="text-gray-700 font-normal">Case Study</span></span></h3>
            <p className="mb-4">FP Advisor is Canada’s largest database of corporate information.  It's a product of the same team behind the Financial Post. It’s a useful resource, but because of the age of the website it had various accessibility concerns and was beginning to look outdated.</p>
            <p className="mb-4">I was consulted at the beginning of the project to do some initial setup work.  I created a good project structure, created some layouts, and added some accessible components (such as textboxes, navs, footers, etc.)</p>
            <p>The new site looks great on both mobile and desktop and is very accessible.  It has accessibility features such as a “Skip Navigation” button, all the interactive controls have focus states and labels, and the complex widgets are built with the latest accessibility best practices. </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-start mt-16 md:mt-32">
          <img className="block mb-10 md:mb-0 w-full md:w-1/2" alt="" src={postmediahub}></img>
          <div>
            <h3 className="text-3xl font-bold mb-8 ">
              <span role="text">Postmedia Hub <span className="text-gray-700 font-normal">Case Study</span></span>
            </h3>
            <p className="mb-4">Postmedia Hub is a marketing analytics platform included free of charge to any Postmedia Marketing customer.  I've consulted with various projects related to The Hub including helping make it mobile friendly and accessible.</p>
          </div>
        </div>

        <h2 className="text-4xl mt-16 text-gray-800 mb-16" id="consulting">Consulting</h2>
        <p className="mb-8">I currently only take projects that are both well-paid and interesting.  If your project fits that criteria, you can pitch it to me here (I'm especially interested in helping organizations become compliant with accessibility laws):</p>
        <div className="flex justify-center">
            <div className="bg-slate-200 text-gray-800 p-8 font-bold text:lg sm:text-xl text-center w-full md:w-3/4">
                consulting@lorantfy.com
                <div>(please provide details in the first email)</div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
