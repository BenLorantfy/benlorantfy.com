import { PropsFromGetStaticProps } from '../utils';
import { BlogService } from '../services/BlogService';
import { BlogArticleLayout } from '../components/BlogArticleLayout';
import cnnScreenshot from '../assets/cnn-font-size-example@x2.png';
import Image from 'next/image';

const slug = 'biggest-news-of-2021-by-font-size';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
);

import { CnnFontSize2021, CnnFontSize2021Histogram } from "../components/CnnFontSize2021";
import { FullWidthContainer } from '../components/FullWidthContainer';

function Page(props: PropsFromGetStaticProps<typeof getStaticProps>) {
    return (
        <BlogArticleLayout 
            slug={slug} 
            markdown={props.markdown} 
            widgets={{
                '[[cnn-font-size-2021]]': (
                    <FullWidthContainer>
                        <CnnFontSize2021 />
                    </FullWidthContainer>
                ),
                '[[cnn-font-size-2021-histogram]]': (
                    <CnnFontSize2021Histogram />
                ),
                '[[cnn-screenshot]]': (
                    <div style={{ border: "2px solid black" }}>
                        <Image alt="Screenshot of cnn.com with a large headline" src={cnnScreenshot} />
                    </div>
                )
            }}
        />
    );
}

export const getStaticProps = async () => ({
    props: {
        markdown: await new BlogService().getPageMarkdown(slug)
    }
})

export default Page
