import { Link } from "remix";
import { ResponsiveImages } from "../ResponsiveImages";

export interface BlogPostCardProps {
    slug: string;
    title: string;
    description: string;
    images: { png?: string, png2x?: string, jpg?: string, jpg2x?: string, webp?: string, webp2x?: string };
}

export function BlogPostCard(props: BlogPostCardProps) {
    return (
        <Link
            prefetch="intent"
            to={`/${props.slug}`}
            className="inline-block w-full md:w-96 bg-neutral-100 rounded-xl align-top"
            aria-labelledby={`post-title-${props.slug}`}
        >
            <div id={`post-title-${props.slug}`} className="mt-2 p-4 text-2xl">{props.title}</div>
            {props.images && (
                <ResponsiveImages
                    alt=""
                    images={props.images}
                />
            )}
            <div className="mt-2 p-4">{props.description}</div>
        </Link>
    )
}