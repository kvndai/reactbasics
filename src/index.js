import React, { Component }from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';
import Header from './components/header';
import Newslist from './components/news_list';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      news: JSON
    }
  }
  
  render() {
    console.log('news state', this.state.news)
    return (
      <div>
        <Header />
        <Newslist news={this.state.news}/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
