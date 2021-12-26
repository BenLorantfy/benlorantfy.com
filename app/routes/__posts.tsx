import { Outlet } from "remix";

export default function PostsLayout() {
    return (
        <>
            <div className="markdown p-8 pl-1 pr-1 md:pl-16 md:pr-16 md:p-16 lg:p-32 lg:pl-32 lg:pr-32 h-full">
                <Outlet />
            </div>
        </>
    );
}
