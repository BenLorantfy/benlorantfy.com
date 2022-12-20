import { PropsFromGetStaticProps } from '../utils';
import { BlogService } from '../services/BlogService';
import { BlogArticleLayout } from '../components/BlogArticleLayout';

const slug = 'no-this-isnt-over-complicated-its-just-complicated';

function Page(props: PropsFromGetStaticProps<typeof getStaticProps>) {
    return (
        <BlogArticleLayout slug={slug} markdown={props.markdown} />
    );
}

export const getStaticProps = async () => ({
    props: {
        markdown: await new BlogService().getPageMarkdown(slug)
    }
})

export default Page


