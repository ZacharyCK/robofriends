import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css'
import ErrorBoundry from "../components/ErrorBoundry";

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
        const { robots, searchCharacters } = this.state
        console.log("3")
        const fiteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchCharacters.toLocaleLowerCase())
        })
        if (!fiteredRobots.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox onSearch={this.onSearchInput} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={fiteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App
