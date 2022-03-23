import Link from "next/link";
import Image from "next/image";

export interface BlogPostCardProps {
    slug: string;
    title: string;
    description: string;
    image: StaticImageData;
}

export function BlogPostCard(props: BlogPostCardProps) {
    return (
        <Link
            href={`/${props.slug}`}
        >
            <a
                className="inline-block w-full md:w-96 bg-neutral-100 rounded-xl align-top"
                aria-labelledby={`post-title-${props.slug}`}
            >
                <div id={`post-title-${props.slug}`} className="mt-2 p-4 text-2xl">{props.title}</div>
                {props.image && (
                    <Image
                        alt=""
                        src={props.image}
                    />
                )}
                <div className="mt-2 p-4">{props.description}</div>
            </a>
        </Link>
    )
}