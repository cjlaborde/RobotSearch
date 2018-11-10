import React from 'react'
import CardList from '../src/CardList'
import SearchBox from '../src/SearchBox'
import { robots } from '../src/robots'

// Props-- 
//Never change they input we never modify
// Props are simply things that come out of state
// (parent) feed STATE >> into child component (props(property))
// As soon as Child component receive the state it's a property/ Child can never change property
// The Parent State tell it what state it is and child receive it as robots
// State --
// Description of your app/ simply an object/ object that describe your application
// our state that describe our application is the robots and what ever input in search bar
// State able to change/ change value of input and change what robts display
// 

const App = () => {
    return ( 
    <div className='tc'>
        <h1>RobotSearch</h1>
        <SearchBox />
        <CardList robots={robots}/>       
    </div>
    )
}

export default App; 