import React from "react";

export default class TweetLink extends React.Component {
    render() {
        const author = this.props.author;
        const quote = this.props.quote;
        const text_data = '"' + quote + '" ' + author;
        const tweet_link = "http://www.twitter.com/intent/tweet?text=" + encodeURIComponent(text_data)

        return (
            <a id="tweet-quote" href={tweet_link} data-text={text_data} target="_top">
                <img src="https://cdn.cms-twdigitalassets.com/content/dam/developer-twitter/images/Twitter_logo_blue_48.png" alt="Twitter logo" />
            </a>
        );
    }
}