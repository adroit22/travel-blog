import React, { Component } from "react";

 
class News extends Component {
		  
		  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
	  this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=035cd6d8de3742d9a068d3980cd5d663")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
	componentWillUnmount() {
		clearInterval(this.interval);
	}
  
  

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div className="Headline">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="Headline">Loading...</div>;
    } else {
      return (
	  <div className="Headline">
        <ul>
          {articles.map(article => (
            <li key={article.title}>
              <a href={article.url}> {article.title} </a>
            </li>
          ))}
        </ul>
	</div>
      );
    }
  }
}

export default News;
 
 
 
 
	
	