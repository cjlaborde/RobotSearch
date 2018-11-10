import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'


class App extends Component {
    constructor() {
        super()
        // state-something that can change and affect our app
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }
//just like dom manipulation we use event
//everything that comes from react/constructor and render are pre build/
// So anything you make your own methods on a component use arrow function syntax
// Makes sure that this is according to where it was created the app
    onSearchChange =(event) => {
        //always use when you want to change state
        this.setState({ searchfield: event.target.value })
    }
    // since this an object we say this.
    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        // console.log(filteredRobots)
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
            return ( 
                // CardList a children of Scroll
            <div className='tc'>   
                <h1 className='f1'>Robot Search</h1>
                <SearchBox searchChange={this.onSearchChange}/>d
                <Scroll>
                <CardList robots={filteredRobots}/>            
                </Scroll>
            </div>
            )
        }
    }
}



export default App; 