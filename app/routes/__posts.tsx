import { Outlet } from "remix";
import { Footer } from "~/components/Footer";
import { Nav } from "~/components/Nav";

export default function PostsLayout() {
    return (
        <>
            <Nav />
            <div className="markdown w-full m-auto min-h-full pl-8 pr-8" style={{ maxWidth: "845px" }}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
