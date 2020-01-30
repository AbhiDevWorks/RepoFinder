import React, { Fragment, Component } from 'react'
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                {/*Option1*/}
                <React.Fragment>
                    <h1>Hello from React 1</h1>
                </React.Fragment>
                {/*Option2*/}
                <Fragment>
                    <h1>Hello from React 2</h1>
                </Fragment>
                {/*Option3*/}
                <>
                    <h1>Hello from React 3</h1>
                </>
                {/*      <div className="App">
      <h1>Hello from React</h1>
  </div>  */}
            </div>
        )

        /*return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Hello from React")
    );*/
    }
}

export default App
