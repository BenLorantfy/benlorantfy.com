import balloons from "./assets/post-thumbnails/balloons@x2.jpg";
import logistics from "./assets/post-thumbnails/logistics@x2.jpg";
import tools from "./assets/post-thumbnails/tools@x2.jpg";
import headlinesChart from "./assets/post-thumbnails/headlines-chart@x2.png";
import homer from "./assets/post-thumbnails/homer.jpg";
import reduxInjectors from "./assets/post-thumbnails/redux-injectors.png";
import guessAndPrayDebugging from "./assets/post-thumbnails/guess-and-pray-debugging.png";
import sharedLibs from "./assets/post-thumbnails/shared-libs.png";
import overComplication from "./assets/post-thumbnails/over-complication.jpg";
import youOwnYourCareer from "./assets/post-thumbnails/you-own-your-career.png";

export const config = {
  articles: {
    "you-own-your-career": {
      title: "You Own Your Career",
      image: youOwnYourCareer,
      cmsID: "",
      description:
        "You're the one who chooses to be a generalist, specialist, or some combination",
    },
    "biggest-news-of-2022-by-font-size": {
      title: "The Biggest News of 2022 Measured by Font Size",
      image: headlinesChart,
      cmsID: "88a4607c43d542ec905fe4687e1440e9",
      description:
        "For the last couple years, I've been keeping track of the font size of the headlines on cnn.com",
    },
    "no-this-isnt-over-complicated-its-just-complicated": {
      title: "No, this isn't over-complicated, it's just complicated",
      image: overComplication,
      cmsID: "06c0be14c4834fc8ab57db915bf8fa7b",
      description:
        "“Why are we over-complicating this?” is a very easy thing to say after being introduced to a project.  What's hard is to reserve judgement until you've educated yourself on the entire problem domain, and noted all the considerations that were made by previous developers.",
    },
    "the-problem-with-shared-libraries-and-monorepos": {
      title: "The Problem with Monorepos and Shared Libraries",
      image: sharedLibs,
      cmsID: "d6bc5bf2947543c2b2eeaf8a201837be",
      description:
        "There’s a unique problem with monorepos and shared libraries that often gets overlooked",
    },
    "guess-and-pray-debugging": {
      title: "Guess and Pray Debugging",
      image: guessAndPrayDebugging,
      cmsID: "c48ea007e221433e9991223ff0272900",
      description: "How to be painfully slow at debugging",
    },
    "the-no-nonsense-styling-method": {
      title: "The No-Nonsense Styling Method",
      cmsID: "cc50b4aa8c9b4fd8bd6253820bccf454",
      image: balloons,
      description:
        "The “No-Nonsense Styling Method” is a set of guidelines that I've compiled that makes styling less surprising and more predictable.",
    },
    "amateurs-talk-implementation-professionals-talk-interfaces": {
      title: "Amateurs talk implementation; professionals talk interfaces",
      cmsID: "7fdf0c302def4b4fb698b89d93689aa4",
      image: logistics,
      description:
        "There's an interesting quote that is often credited to Omar Bradley (1893-1981), the last five-star officer of the United States.  It goes like this...",
    },
    "blame-tooling-not-people": {
      title: "Blame Tooling, Not People",
      cmsID: "b6c3cb7849af4a44b83cf5154c576776",
      image: tools,
      description:
        "Tooling is much more effective than people at preventing mistakes, encouraging patterns, and discouraging anti-patterns.",
    },
    "biggest-news-of-2021-by-font-size": {
      title: "The Biggest News of 2021 Measured by Font Size",
      image: headlinesChart,
      cmsID: "951af48e111341058bf7124e837a8a93",
      description:
        "For the last year, I've been keeping track of the font size of the headlines on cnn.com",
    },
    "how-to-mangle-your-git-history": {
      title: "How to Mangle your git History",
      image: homer,
      cmsID: "054c7e77441d4aa9a9f7b4f85031a081",
      description:
        "Wondering how you can increase your job security?  Here are a few handy ways that you can make it difficult for your co-workers to read through your git history.",
    },
    "announcing-redux-injectors-2": {
      title: "Announcing redux-injectors 2.0",
      image: reduxInjectors,
      cmsID: "58aa76303c5241e089dca3cab7ab38d5",
      description:
        "It's been a long time coming, but redux-injectors 2.0 is here",
    },
  },
};
