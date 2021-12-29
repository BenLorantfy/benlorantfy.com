import Mdx from '~/articles/amateurs-talk-implementation-professionals-talk-interfaces.mdx';
import thumbnail from '~/images/post-thumbnails/logistics@x2.jpg';
import { getArticleMeta } from '~/utils';

export const slug = 'amateurs-talk-implementation-professionals-talk-interfaces';

export const meta = () => getArticleMeta({
  title: "Amateurs talk implementation; professionals talk interfaces",
  description: "There's an interesting quote that is often credited to Omar Bradley (1893-1981), the last five-star officer of the United States.  It goes like this...",
  image: thumbnail
})

export default Mdx;
