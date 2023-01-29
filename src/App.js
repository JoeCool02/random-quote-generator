import React from 'react';
import Quote from './components/Quote'
import Author from './components/Author';
import QuoteButton from './components/QuoteButton';
import TweetLink from './components/TweetLink'
import './App.css';
import './'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
    this.options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6caa94aacbmshca3669119120c76p193c37jsn10ff8e1d91d6',
        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1', this.options)
      .then(response => response.json())
      .then(response => this.setState(
        {
          quote: response[0]["text"],
          author: "- " + response[0]["author"],
        }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.handleClick()
  }

  render() {
    return (
      <div id="app">
        <div id="quote-box">
          <Quote quote={this.state.quote} />
          <Author author={this.state.author} />
          <div id="buttons">
            <TweetLink quote={this.state.quote} author={this.state.author} />
            <QuoteButton onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
