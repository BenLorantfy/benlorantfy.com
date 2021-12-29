import { Outlet } from "remix";
import { Footer } from "~/components/Footer";
import { Nav } from "~/components/Nav";
import { NavBarLink } from "~/components/NavBarLink";
import profile from "~/images/profile-picture.jpg";

export default function PostsLayout(props: any) {
    return (
        <>
            <Nav />
            <div className="markdown w-full m-auto min-h-full pl-8 pr-8" style={{ maxWidth: "845px" }}>
                <Outlet />
                <AboutTheAuthor />
            </div>
            <Footer />
        </>
    );
}

function AboutTheAuthor() {
    return (
        <div className="bg-neutral-100 rounded-xl p-8 lg:-ml-8 lg:-mr-8 mt-16 md:mt-32">
            <div className="font-bold">Written By Ben Lorantfy</div>
            <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:items-start">
                <p>
                    Ben is an award-winning software developer specializing in frontend development.  He builds delightful user experiences that are fast, accessible, responsive, and maintainable and helps others to do the same.  He lives with his partner and dog in Kitchener, Ontario.
                    <span className="block mt-8">
                        <NavBarLink to="/about">More About Ben <span className="aria-hidden">»</span></NavBarLink>
                    </span>
                </p>
                <div className="flex-shrink-0 w-5/12 sm:w-1/4 mt-8 sm:mt-0">
                    <img alt="" className="w-full rounded-full overflow-hidden " src={profile} />
                </div>
            </div>
        </div>
    )
}