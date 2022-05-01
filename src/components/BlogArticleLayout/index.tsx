import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { config } from "../../config";
import { AboutTheAuthor } from "../AboutTheAuthor";
import { Footer } from "../Footer";
import { HeroImage } from "../HeroImage";
import { Nav } from "../Nav";
import Image from 'next/image'

export function BlogArticleLayout(props: { slug: keyof typeof config.articles, markdown: string, widgets?: { [key: string]: ReactNode } }) {
    const articleParts = props.markdown.split(/(\[\[.+?\]\])/g);
    return (
        <>
            <Nav />
            <div className="markdown w-full m-auto min-h-full pl-8 pr-8" style={{ maxWidth: "845px" }}>
                {articleParts.map((articlePart, idx) => {
                    if (idx % 2 === 0) {
                        return (
                            <ReactMarkdown
                                components={{
                                    img: (props) => {
                                        const unprocessedAlt = props.alt || '';
                                        const parts = unprocessedAlt.split('|');
                                        const otherParts = parts.slice(0, parts.length - 1);
                                        const alt = otherParts.join('|');
                                        const size = parts[parts.length - 1];
                                        const [width, height] = size.split('x');

                                        return (
                                            <Image
                                                src={props.src!}
                                                alt={alt}
                                                width={Number(width)}
                                                height={Number(height)}
                                            />
                                        )
                                    }
                                }}
                            >
                                {articlePart}
                            </ReactMarkdown>
                        )
                    }

                    if (articlePart === "[[hero-image]]") {
                        return <HeroImage slug={props.slug} />
                    }

                    return props.widgets?.[articlePart] || null;
                })}
                <AboutTheAuthor />
            </div>
            <Footer />
        </>
    );
}
