import Mdx from '~/articles/blame-tooling-not-people.mdx';
import thumbnail from '~/images/post-thumbnails/tools@x2.jpg';
import { getArticleMeta } from '~/utils';

export const slug = 'blame-tooling-not-people';

export const meta = () => getArticleMeta({
  title: "Blame Tooling, Not People",
  description: "Tooling is much more effective than people at preventing mistakes, encouraging patterns, and discouraging anti-patterns.",
  image: thumbnail
})

export default Mdx;
