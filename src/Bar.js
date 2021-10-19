import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

class LevelList extends Component {

    render() {
        return ( <ul>
  <li><a href="default.asp">Levels</a></li>
  <li><a href="news.asp">Players</a></li>
  <li><a href="contact.asp">Login</a></li>
</ul> );

    }
}
export default LevelList;
