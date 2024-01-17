import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchCharacters: ''
        }
        console.log("1")
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
        console.log('2')
    }

    onSearchInput = (event) => {
        this.setState({searchCharacters: event.target.value})
    }

    render() {
        console.log("3")
        const fiteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchCharacters.toLocaleLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox onSearch={this.onSearchInput} />
                    <CardList robots={fiteredRobots} />
                </div>
            )
        }
        
    }
}

export default App
