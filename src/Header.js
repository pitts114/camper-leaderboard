import React, { Component } from 'react'
const fccImg = "https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.png"

export class Header extends Component {
  render() {
    return(
      <header>
        <img src={fccImg} className="img-fluid" alt="freeCodeCamp" />
        <a href="https://github.com/pullman14"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.freecodecamp.org/pullman14"><i className="fa fa-free-code-camp" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/pitts114/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
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
