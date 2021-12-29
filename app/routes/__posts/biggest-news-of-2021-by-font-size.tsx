import Mdx from '~/articles/biggest-news-of-2021-by-font-size.mdx';
import thumbnail from '~/images/post-thumbnails/headlines-chart@x2.png';
import { getArticleMeta } from '~/utils';

export const slug = 'biggest-news-of-2021-by-font-size';

export const meta = () => getArticleMeta({
  title: "The Biggest News of 2021 Measured by Font Size",
  description: "For the last year, I've been keeping track of the font size of the headlines on cnn.com",
  image: thumbnail
});

export default Mdx;
