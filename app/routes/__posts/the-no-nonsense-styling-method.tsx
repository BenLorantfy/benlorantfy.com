import Mdx from '~/articles/the-no-nonsense-styling-method.mdx';
import thumbnail from '~/images/post-thumbnails/balloons@x2.jpg';
import { getArticleMeta } from '~/utils';

export const slug = 'the-no-nonsense-styling-method';

export const meta = () => getArticleMeta({
  title: "The No-Nonsense Styling Method",
  description: "The “No-Nonsense Styling Method” is a set of guidelines that I've come up with that makes styling less surprising and more predictable.",
  image: thumbnail
})

export default Mdx;
