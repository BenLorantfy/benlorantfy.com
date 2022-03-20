import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';
import { PropsFromGetStaticProps } from '../utils';
import { BlogService } from '../services/BlogService';

function Page(props: PropsFromGetStaticProps<typeof getStaticProps>) {
    return (
        <>
            <Nav />
            {props.markdown}
            <Footer />
        </>
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
