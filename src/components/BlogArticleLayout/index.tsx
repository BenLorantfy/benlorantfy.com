import ReactMarkdown from "react-markdown";
import { config } from "../../config";
import { AboutTheAuthor } from "../AboutTheAuthor";
import { Footer } from "../Footer";
import { HeroImage } from "../HeroImage";
import { Nav } from "../Nav";

export function BlogArticleLayout(props: { slug: keyof typeof config.articles, markdown: string }) {
    const [markdown1, markdown2] = props.markdown.split("[hero-image]");
    return (
        <>
            <Nav />
            <div className="markdown w-full m-auto min-h-full pl-8 pr-8" style={{ maxWidth: "845px" }}>
                <ReactMarkdown>{markdown1}</ReactMarkdown>
                <HeroImage slug={props.slug} />
                <ReactMarkdown>{markdown2}</ReactMarkdown>
                <AboutTheAuthor />
            </div>
            <Footer />
        </>
    );
}
