import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import LevelList from "./LevelList";
import Bar from "./Bar"
class App extends Component {

    render() {
        return (
            <div className="App">
            <Bar />
                <header className="App-header">
                    <LevelList />
                </header>
               </div>);

    }
}
export default App;
