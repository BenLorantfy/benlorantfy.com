import { Link, useLoaderData } from "remix";

import * as blameToolingNotPeople from "./__posts/blame-tooling-not-people.mdx";
import * as amateursTalkImplementationProfessionalsTalkInterfaces from "./__posts/amateurs-talk-implementation-professionals-talk-interfaces.mdx";

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
      <div className="p-44 h-full flex flex-1 justify-between items-center">
        <div className="pr-44">
          <h1 className="text-4xl text-gray-800">Hey, I'm Ben 👋</h1>
          <p className="text-3xl mt-8 text-gray-700">I build <span className="bg-fuchsia-200">delightful user experiences</span> that are fast, accessible, responsive, and maintainable.  I also try to <span className="bg-indigo-200">enable others</span> to do the same</p>
          <Link 
            to="/about" 
            prefetch="render" 
            className="block mt-16 hover:text-blue-600 hover:underline focus:text-blue-600 focus:underline"
          >
            More About Ben <span aria-hidden>»</span>
          </Link>
        </div>
        <div className="rounded-full overflow-hidden flex-shrink-0 w-1/4">
          <img className="w-full" src="/profile-picture.jpg"></img>
        </div>
      </div>
      <div className="p-44 h-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-4xl text-gray-800">Blog</h2>
        </div>
        <div className="mt-4">
          {posts.map((post) => (
            <Link 
              prefetch="intent" 
              to={`/${post.slug}`}
              className="inline-block w-96 bg-neutral-100 rounded-xl mr-8 align-top"
            >
              <div className="mt-2 p-4 text-2xl">{post.title}</div>
              <img alt="" src={post.image} />
              <div className="mt-2 p-4">{post.description}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-44 h-full flex flex-1 justify-between items-center">
        <h2 className="text-4xl text-gray-800">Portfolio</h2>
      </div>
    </>
  );
}
