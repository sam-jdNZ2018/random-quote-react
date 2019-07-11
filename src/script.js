import React from 'react';

const QUOTES = [
  [
    "If you don't like the road you're walking, start paving another one.",
    "Dolly Parton"
  ],
  [
    "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    "Helen Keller"
  ],
  ["Life is a series of baby steps.", "Hoda Kotb"],
  ["Love yourself first and everything else falls into line.", "Lucille Ball"],
  ["Lead from the heart, not the head.", "Princess Diana"],
  ["Those who don't believe in magic will never find it.", "Roald Dahl"],
  [
    "I've failed over and over and over again in my life and that is why I succeed.",
    "Michael Jordan"
  ],
  ["Nothing can dim the light that shines from within.", "Maya Angelou"],
  [
    "Sometimes you will never know the value of a moment until it becomes a memory.",
    "Dr. Seuss"
  ],
  [
    "You can't go back and change the beginning, but you can start where you are and change the ending.",
    "C.S. Lewis"
  ]
];

const COLORS =["rgb(255, 51, 0)", "rgb(255, 153, 0)","rgb(153, 102, 51)","rgb(179, 0, 89)", "rgb(230, 184, 0)", "rgb(204, 204, 0)", "rgb(153, 204, 0)", "rgb(255, 102, 102)", "rgb(0, 51, 102)", "rgb(51, 51, 255)", "rgb(102, 153, 153)", "rgb(51, 153, 102)", "rgb(153, 153, 255)", "rgb(153, 0, 204)", "rgb(0, 51, 0)"];

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.getNewQuote = this.getNewQuote.bind(this);
    this.replaceCurrQuote = this.replaceCurrQuote.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
    let quote = this.getNewQuote("", QUOTES);
    let currColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    document.body.style.backgroundColor = currColor;
    this.state = { qtext: quote[0], qauth: quote[1], color: currColor};
  }

  //Get a new quote pairing to display, ensuring that it is not the same as the current quote
  getNewQuote(currQuote, quotes) {
    let i = Math.floor(Math.random() * quotes.length);
    while (quotes[i][0] == currQuote) {
      i = Math.floor(Math.random() * quotes.length);
    }
    return quotes[i];
  }

  //Replace the currently displayed quote text and quote author with a randomly chosen new quote from
  //the QUOTES array const
  replaceCurrQuote() {
  /*  let newQuote = this.getNewQuote(this.state.qtext, QUOTES);
    this.setState({ qtext: newQuote[0], qauth: newQuote[1],  color: this.state.color});*/
     let newQuote = this.getNewQuote(this.state.qtext, QUOTES);
    let currColor = this.getRandomColor();
    this.setState({ qtext: newQuote[0], qauth: newQuote[1],  color: currColor});
  }

  //Get a random color and return said color in an object ready for use as a style object for various HTML elements
  getRandomColor(){    
   /* let hue = Math.floor(Math.random() * 360);
    let sat = Math.floor(Math.random() * 50) + 50;
    let lig = 50;
    let colorString = "hsl(" + hue + "," + sat + "%," + lig + "%)";
    document.body.style.backgroundColor = colorString;
    return {backgroundColor: colorString};*/
    let colorString = COLORS[Math.floor(Math.random() * COLORS.length)];
    while(this.state.color == colorString){
      colorString = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
    document.body.style.backgroundColor = colorString;
    return colorString; 
  }
  
  render() {
    let twink = "https://twitter.com/intent/tweet?text=" + this.state.qtext + ".  -- " + this.state.qauth;
    let tulink = "https://www.tumblr.com/widgets/share/tool?posttype=quote&title=DailyQuote&content=" + this.state.qtext + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
    let color = {backgroundColor: this.state.color};
    return (
      <div id="quote-outer">
        <h1 id="title">The Quote Machine</h1>
      <div id="quote-box">
        <div id="quote-cont">
          <div id="quote-details">
            <p id="text">
              <i className="fas fa-quote-left" /> {this.state.qtext}
            </p>
            <p id="author">{this.state.qauth}</p>
          </div>
          <div id="button-cont">
            <div id="social-cont">
              <a className="btn btn-default" id="tweet-quote" style={color} href={twink} target="_blank" type="button">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-default" id="tumble-quote" style={color} href={tulink} target="_blank" type="button">
                <i className="fab fa-tumblr" />
              </a>
            </div>
            <button className="btn btn-default" id="new-quote" type="button" style={color} onClick={this.replaceCurrQuote}>Get New Quote</button>
          </div>
        </div>
      </div>
        </div>
    );
  }
}

export default QuoteMachine;
