import React, { Component } from 'react'
import {Table, TableEntry} from './Table.js'
import Header from './Header.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Table />
        </div>
      </div>
    )
  }
}

export default App;
