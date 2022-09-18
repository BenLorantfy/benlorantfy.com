import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { config } from "../../config";
import { AboutTheAuthor } from "../AboutTheAuthor";
import { Footer } from "../Footer";
import { HeroImage } from "../HeroImage";
import { Nav } from "../Nav";
import { TweetEmbed } from '../TweetEmbed';
import Image from 'next/image'
import Head from 'next/head'

export function BlogArticleLayout(props: { slug: keyof typeof config.articles, markdown: string, widgets?: { [key: string]: ReactNode } }) {
    const articleParts = props.markdown.split(/(\[\[.+?\]\])/g);
    return (
        <>
            <Head>
                <title>{config.articles[props.slug].title}</title>
                <meta name="description" content={config.articles[props.slug].description} />
                <meta name="author" content="Ben Lorantfy" />
                
                {/* LinkedIn */}
                <meta property="og:title" content={config.articles[props.slug].title} />
                <meta name="image" property="og:image" content={convertToAbsoluteUrl(config.articles[props.slug].image.src)} />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={config.articles[props.slug].title} />
                <meta name="twitter:description" content={config.articles[props.slug].description} />
                <meta name="twitter:image" content={convertToAbsoluteUrl(config.articles[props.slug].image.src)} />
            </Head>
            <Nav />
            <div className="w-full m-auto min-h-full pl-8 pr-8" style={{ maxWidth: "845px" }}>
                <div className="markdown">
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

                        if (articlePart === "[[monorepo-tweet]]") {
                            return <TweetEmbed tweetId={'1569702522016653314'} />
                        }

                        return props.widgets?.[articlePart] || null;
                    })}
                </div>
                <AboutTheAuthor />
            </div>
            <Footer />
        </>
    );
}

const convertToAbsoluteUrl = (url: string) => {
    if (url.startsWith('/')) {
        return `https://www.benlorantfy.com${url}`;
    }

    return url;
}