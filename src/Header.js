import React, { Component } from 'react'
const fccImg = "https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.png"

export class Header extends Component {
  render() {
    return(
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="https://www.freecodecamp.com"><img src={fccImg} alt="freecodecamp" /></a>
          </div>
        </div>
      </nav>
    )
  }
}


export class Footer extends Component {
  render() {
    return(
      <footer className="text-center">
        <a href="https://github.com/pullman14"><p>pullman14</p></a>
      </footer>
    )
  }
}
