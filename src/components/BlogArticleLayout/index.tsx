import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { config } from "../../config";
import { AboutTheAuthor } from "../AboutTheAuthor";
import { Footer } from "../Footer";
import { HeroImage } from "../HeroImage";
import { Nav } from "../Nav";

export function BlogArticleLayout(props: { slug: keyof typeof config.articles, markdown: string, widgets?: { [key: string]: ReactNode } }) {
    const articleParts = props.markdown.split(/(\[\[.+?\]\])/g);
    return (
        <>
            <Nav />
            <div className="markdown w-full m-auto min-h-full pl-8 pr-8" style={{ maxWidth: "845px" }}>
                {articleParts.map((articlePart, idx) => {
                    if (idx % 2 === 0) {
                        return <ReactMarkdown>{articlePart}</ReactMarkdown>
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
