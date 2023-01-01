import { PropsFromGetStaticProps } from '../utils';
import { BlogService } from '../services/BlogService';
import { BlogArticleLayout } from '../components/BlogArticleLayout';
import cnnScreenshot from '../assets/cnn-font-size-example@x2.png';
import Image from 'next/image';

const slug = 'biggest-news-of-2022-by-font-size';

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

import { CnnFontSize2022, CnnFontSize2022Histogram } from "../components/CnnFontSize2022";
import { FullWidthContainer } from '../components/FullWidthContainer';

function Page(props: PropsFromGetStaticProps<typeof getStaticProps>) {
    return (
        <BlogArticleLayout 
            slug={slug} 
            markdown={props.markdown} 
            widgets={{
                '[[cnn-font-size-2022]]': (
                    <FullWidthContainer>
                        <CnnFontSize2022 />
                    </FullWidthContainer>
                ),
                '[[cnn-font-size-2022-histogram]]': (
                    <CnnFontSize2022Histogram />
                ),
                // '[[cnn-screenshot]]': (
                //     <div style={{ border: "2px solid black" }}>
                //         <Image alt="Screenshot of cnn.com with a large headline" src={cnnScreenshot} />
                //     </div>
                // )
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
