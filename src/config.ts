import balloons from './assets/post-thumbnails/balloons@x2.jpg';
import logistics from './assets/post-thumbnails/logistics@x2.jpg';
import tools from './assets/post-thumbnails/tools@x2.jpg';
import headlinesChart from './assets/post-thumbnails/headlines-chart@x2.png';
import homer from './assets/post-thumbnails/homer.jpg';
import reduxInjectors from './assets/post-thumbnails/redux-injectors.png';
import guessAndPrayDebugging from './assets/post-thumbnails/guess-and-pray-debugging.png';
import sharedLibs from './assets/post-thumbnails/shared-libs.png';

export const config = {
    articles: {
        'the-problem-with-shared-libraries-and-monorepos': {
            title: 'The Problem with Monorepos and Shared Libraries',
            image: sharedLibs,
            cmsID: 'd6bc5bf2947543c2b2eeaf8a201837be',
            description: 'There’s a unique problem with monorepos and shared libraries that often gets overlooked'
        },
        'guess-and-pray-debugging': {
            title: 'Guess and Pray Debugging',
            image: guessAndPrayDebugging,
            cmsID: 'c48ea007e221433e9991223ff0272900',
            description: 'How to be painfully slow at debugging'
        },
        'the-no-nonsense-styling-method': {
            title: 'The No-Nonsense Styling Method',
            cmsID: 'cc50b4aa8c9b4fd8bd6253820bccf454',
            image: balloons,
            description: "The “No-Nonsense Styling Method” is a set of guidelines that I've compiled that makes styling less surprising and more predictable."
        },
        'amateurs-talk-implementation-professionals-talk-interfaces': {
            title: 'Amateurs talk implementation; professionals talk interfaces',
            cmsID: '7fdf0c302def4b4fb698b89d93689aa4',
            image: logistics,
            description: "There's an interesting quote that is often credited to Omar Bradley (1893-1981), the last five-star officer of the United States.  It goes like this..."
        },
        'blame-tooling-not-people': {
            title: 'Blame Tooling, Not People',
            cmsID: 'b6c3cb7849af4a44b83cf5154c576776',
            image: tools,
            description: 'Tooling is much more effective than people at preventing mistakes, encouraging patterns, and discouraging anti-patterns.'
        },
        'biggest-news-of-2021-by-font-size': {
            title: 'The Biggest News of 2021 Measured by Font Size',
            image: headlinesChart,
            cmsID: '951af48e111341058bf7124e837a8a93',
            description: "For the last year, I've been keeping track of the font size of the headlines on cnn.com"
        },
        'how-to-mangle-your-git-history': {
            title: 'How to Mangle your git History',
            image: homer,
            cmsID: '054c7e77441d4aa9a9f7b4f85031a081',
            description: 'Wondering how you can increase your job security?  Here are a few handy ways that you can make it difficult for your co-workers to read through your git history.'
        },
        'announcing-redux-injectors-2': {
            title: 'Announcing redux-injectors 2.0',
            image: reduxInjectors,
            cmsID: '58aa76303c5241e089dca3cab7ab38d5',
            description: 'It\'s been a long time coming, but redux-injectors 2.0 is here'
        }
    }
}
