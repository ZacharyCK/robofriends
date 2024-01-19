import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css'
import ErrorBoundry from "../components/ErrorBoundry";

const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchCharacters, setSearchCharacters] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
             .then(response => response.json())
             .then(users => {setRobots(users)})
        console.log(count)
    }, [count])

    const onSearchInput = (event) => {
        // this.setState({searchCharacters: event.target.value})
        setSearchCharacters(event.target.value)
    }

    const fiteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchCharacters.toLocaleLowerCase())
    })

    if (!robots.length) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <button onClick={()=>setCount(count+1)}>Click Me</button>
                <SearchBox onSearch={onSearchInput} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={fiteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App
