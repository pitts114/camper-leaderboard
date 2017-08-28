import React, { Component } from 'react'
import Table from './Table.js'
import {Header, Footer} from './Header.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Table />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
