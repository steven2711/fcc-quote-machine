import React from "react";

const SocialButtons = ({ quote, author }) => {
  return (
    <div>
      <a
        className="float-right mt-3"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${quote}--${author}&hashtags=quotesfordays`}
      >
        <i className="fa fa-twitter-square fa-2x" />
      </a>
    </div>
  );
};

export default SocialButtons;
