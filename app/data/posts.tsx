import * as theNoNonsenseStylingMethod from '~/routes/__posts/the-no-nonsense-styling-method';
import * as biggestNewsOf2021ByFontSize from '~/routes/__posts/biggest-news-of-2021-by-font-size';
import * as blameToolingNotPeople from '~/routes/__posts/blame-tooling-not-people';
import * as amateursTalkImplementationProfessionalsTalkInterfaces from '~/routes/__posts/amateurs-talk-implementation-professionals-talk-interfaces';

import headlinesChartThumbnail from "~/images/post-thumbnails/headlines-chart.png";
import headlinesChartThumbnail2x from "~/images/post-thumbnails/headlines-chart@x2.png";
import headlinesChartThumbnailWebp from "~/images/post-thumbnails/headlines-chart.webp";
import headlinesChartThumbnailWebp2x from "~/images/post-thumbnails/headlines-chart@x2.webp";

import logisticsThumbnail from "~/images/post-thumbnails/logistics.jpg";
import logisticsThumbnail2x from "~/images/post-thumbnails/logistics@x2.jpg";
import logisticsThumbnailWebp from "~/images/post-thumbnails/logistics.webp";
import logisticsThumbnailWebp2x from "~/images/post-thumbnails/logistics@x2.webp";

import toolsThumbnail from "~/images/post-thumbnails/tools.jpg";
import toolsThumbnail2x from "~/images/post-thumbnails/tools@x2.jpg";
import toolsThumbnailWebp from "~/images/post-thumbnails/tools.webp";
import toolsThumbnailWebp2x from "~/images/post-thumbnails/tools@x2.webp";

import balloonsThumbnail from "~/images/post-thumbnails/balloons.jpg";
import balloonsThumbnail2x from "~/images/post-thumbnails/balloons@x2.jpg";
import balloonsThumbnailWebp from "~/images/post-thumbnails/balloons.webp";
import balloonsThumbnailWebp2x from "~/images/post-thumbnails/balloons@x2.webp";

export function getPosts() {
    return [
      convertModuleToPostInfo(theNoNonsenseStylingMethod),
      convertModuleToPostInfo(biggestNewsOf2021ByFontSize),
      convertModuleToPostInfo(blameToolingNotPeople),
      convertModuleToPostInfo(amateursTalkImplementationProfessionalsTalkInterfaces),
    ]
}

function convertModuleToPostInfo(mod: { slug: string, meta: () => ({ title: string, description: string }) }) {
    const meta = mod.meta();

    return {
      slug: mod.slug,
      title: meta.title,
      description: meta.description
    };
  }


/**
 * Adds images to the list of posts
 *
 * @note remix only includes images in the bundle if they are imported into
 * client-side code, so we can't move this code to `getPosts`
 */
export function useAddImagesToPosts<T extends { slug: string }>(posts: Array<T>): Array<T & { images?: { png?: string, png2x?: string, jpg?: string, jpg2x?: string, webp?: string, webp2x?: string } }> {
  return posts.map((post) => {
    if (post.slug === 'the-no-nonsense-styling-method') {
      return {
        ...post,
        images: {
          jpg: balloonsThumbnail,
          jpg2x: balloonsThumbnail2x,
          webp: balloonsThumbnailWebp,
          webp2x: balloonsThumbnailWebp2x
        }
      }
    }

    if (post.slug === 'biggest-news-of-2021-by-font-size') {
      return {
        ...post,
        images: {
          png: headlinesChartThumbnail,
          png2x: headlinesChartThumbnail2x,
          webp: headlinesChartThumbnailWebp,
          webp2x: headlinesChartThumbnailWebp2x
        }
      }
    }

    if (post.slug === 'amateurs-talk-implementation-professionals-talk-interfaces') {
      return {
        ...post,
        images: {
          jpg: logisticsThumbnail,
          jpg2x: logisticsThumbnail2x,
          webp: logisticsThumbnailWebp,
          webp2x: logisticsThumbnailWebp2x
        }
      }
    }

    if (post.slug === 'blame-tooling-not-people') {
      return {
        ...post,
        images: {
          jpg: toolsThumbnail,
          jpg2x: toolsThumbnail2x,
          webp: toolsThumbnailWebp,
          webp2x: toolsThumbnailWebp2x
        }
      }
    }

    return post;
  });
}
