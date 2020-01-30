import React, { Component } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem'

class App extends Component {
    render() {
        /*const name = 'John Doe'
        const loading = false
        const showName = true*/

        return (
            /*Expressions & conditionals
            <div className="App">
                <h1>Hello {name.toUpperCase()}</h1>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <h3>Hello Hey there {showName && name}</h3>
                )}
            </div>*/

            <div className="App">
                <Navbar />
                <UserItem></UserItem>
            </div>
        )
    }
}

export default App
