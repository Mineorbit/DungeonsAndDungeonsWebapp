import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import LevelList from "./LevelList";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <LevelList />
                </header>
               </div>);

    }
}
export default App;
