import { TwitterTweetEmbed } from 'react-twitter-embed';


export function TweetEmbed(props: { tweetId: string }) {
    return (
        <TwitterTweetEmbed 
            tweetId={props.tweetId}
        />
    )
}
