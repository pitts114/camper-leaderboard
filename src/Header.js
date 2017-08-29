import React, { Component } from 'react'
const fccImg = "https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.png"

export class Header extends Component {
  render() {
    return(
      <header>
        <img src={fccImg} className="img-fluid" alt="freeCodeCamp" />
      </header>
    )
  }
}


export class Footer extends Component {
  render() {
    return(
      <footer className="text-center">
        <p>pullman14</p>
      </footer>
    )
  }
}
