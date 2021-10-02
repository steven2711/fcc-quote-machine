import React, { Component } from "react";
import QuoteBlock from "./components/quoteBlock";

class App extends Component {
  state = {
    quote: "",
    author: "",
    quotes: null,
    isLoaded: false,
  };

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          quotes: json.quotes.map((item) => item),
        });

        this.getRandomQuote();
      })

      .catch((err) => console.log(err));
  }

  randomNumberGen = (max) => {
    if (this.state.quotes.length) {
      return Math.floor(Math.random() * max);
    }
  };

  getRandomQuote = () => {
    const dataLength = this.state.quotes.length;
    const randomNumber = this.randomNumberGen(dataLength);
    const { quote, author } = this.state.quotes[randomNumber];
    this.setState({
      quote: quote,
      author: author,
    });
  };

  onButtonPress = () => {
    return this.getRandomQuote();
  };

  shareTwitter = () => {};

  render() {
    return (
      <div className="app">
        <QuoteBlock
          author={this.state.author}
          quote={this.state.quote}
          onPress={this.onButtonPress}
        />
      </div>
    );
  }
}

export default App;
