import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

class App extends Component {
    state = {levelList: []}


    componentDidMount() {
        fetch("http://46.232.248.108:8000/level/all?proto_resp=false")
            .then((res) => res.json())
            .then((levels) => {
                console.log(JSON.stringify(levels, null, 2));
                let levelList = levels.levels
                this.setState({levelList});
                console.log(this.state);
            });
    }


    formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <table>{ this.state.levelList.map(level => <tr><td>{level.ulid}</td><td>{level.name}</td><td>{level.description}</td><td>{this.formatDate(level.upload_date)}</td><td><a href={"http://localhost:8000/level/download/?proto_resp=false&ulid="+level.ulid}>Download</a> </td></tr>)}</table>
                </header>
               </div>);

    }
}
export default App;
