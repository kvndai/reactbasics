import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
// HashRouter / MemoryRouter
import ReactDOM from 'react-dom';

import Posts from './components/posts';
import Postsitem from './components/posts_item';
import Profile from './components/profile';
import Notfound from './components/404';



class App extends Component {
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <div>Header/Nav component goes here</div>
      <header>
        <NavLink to="/" activeClassName="home">Home</NavLink>
        <NavLink to="/posts" activeClassName="post">Posts</NavLink>
        <NavLink to="/profile" activeClassName="profile">Profile</NavLink>
        <hr/>
      </header>
      <Switch>
        <Route path="/posts/:id" component={Postsitem}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/posts" component={Posts}></Route>
        <Route exact path="/" component={App}></Route>
        <Route path="*" component={Notfound}></Route>
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));