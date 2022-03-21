import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { PropsFromGetStaticProps } from '../utils';
import { BlogService } from '../services/BlogService';
import { NavBarLink } from '../components/NavBarLink';
import { ExternalLink } from '../components/ExternalLink';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import profilePicture from '../assets/profile-picture.jpg';

function Page(props: PropsFromGetStaticProps<typeof getStaticProps>) {
    return (
        <>
            <Nav />
            <div className="markdown w-full m-auto min-h-full pl-8 pr-8" style={{ maxWidth: "845px" }}>
                <ReactMarkdown>{props.markdown}</ReactMarkdown>
                <AboutTheAuthor />
            </div>
            <Footer />
        </>
    );
}

function AboutTheAuthor() {
    return (
        <div className="bg-neutral-100 rounded-xl p-8 lg:-ml-8 lg:-mr-8 mt-16 md:mt-32">
            <div className="font-bold">Written By Ben Lorantfy</div>
            <div className="flex flex-col-reverse sm:flex-row gap-8 items-center sm:items-start">
                <p>
                    Ben is an award-winning software developer specializing in frontend development.  He builds delightful user experiences that are fast, accessible, responsive, and maintainable and helps others to do the same.  He lives with his partner and dog in Kitchener, Ontario.
                    <span className="block mt-8">
                        <NavBarLink to="/about">More About Ben <span className="aria-hidden">»</span></NavBarLink>
                    </span>
                    <span className="block mt-8">
                        <ExternalLink href="https://twitter.com/benlorantfy">
                            <span className="flex flex-row">
                                <TwitterIcon /><span className="ml-2 mr-2">Follow <span className="text-blue-500">@benlorantfy</span> on twitter</span> <span className="aria-hidden">»</span>
                            </span>
                        </ExternalLink>
                    </span>
                </p>
                <div className="flex-shrink-0 w-5/12 sm:w-1/4 mt-8 sm:mt-0">
                    <div className="w-full rounded-full overflow-hidden">
                        <Image layout="responsive" src={profilePicture} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function TwitterIcon() {
    return (
        <svg className="mt-px" role="img" aria-hidden fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
    )
}

export const getStaticProps = async () => {
    const blogService = new BlogService();
    const pageMarkdown = await blogService.getPageMarkdown("the-no-nonsense-styling-method");

    return {
        props: {
            markdown: pageMarkdown
        }
    }
}

export default Page
