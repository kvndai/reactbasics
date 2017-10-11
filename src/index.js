import React, { Component }from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';
import Header from './components/header';
import Newslist from './components/news_list';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      news: JSON,
      filtered: JSON
    }
  }
  
filterNews(keywords) {
  console.log(keywords)
  let filtered = this.state.news.filter(item => {
    return item.title.indexOf(keywords) > -1;
  })
  console.log(filtered)

  this.setState({filtered})
}

  render() {
    console.log('news state', this.state)
    return (
      <div>
        <Header newsSearch={keywords => this.filterNews(keywords)}/>
        <Newslist news={this.state.filtered}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
