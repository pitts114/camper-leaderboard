import React, {Component} from 'react'
import $ from 'jquery'
const url30 = "https://fcctop100.herokuapp.com/api/fccusers/top/recent"
const urlAll = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"

//This table is given a list of Campers (including their username amd pic,
//30 day points, and all time points)
//The table will sort the campers by points
class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campers30: null,
      campersAll: null
    }
    this.addCampers = this.addCampers.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  addCampers(campers30, campersAll){
    console.log(campers30)
    console.log(campersAll)
  }

  componentDidMount() {
    var campers30, campersAll
    var self = this

    $.getJSON(url30, function(data){
      campers30 = data
      if (campers30 && campersAll){
        self.addCampers(campers30, campersAll)
      }
    })
    $.getJSON(urlAll, function(data){
      campersAll = data
      if (campers30 && campersAll){
        self.addCampers(campers30, campersAll)
      }
    })
  }

  toggleSort() {

  }

  render() {
    //if campers is empty, render some "loading" table
    //(add placeholders to rows, design after the layout is set)
    //else, render the actual table with campers
    /*
    if (this.state.campers == null){
      return(
        <h1>Loading</h1>
      )
    }
    */
    /*
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
      if(xhr.status === 200){
        var obj = JSON.parse(xhr.responseText);
        console.log(obj)
      }
      else {

      }
    }
*/
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
          <th><a>Points in Past 30 Days</a></th>
          <th><a>All Time Points</a></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>pullman14</td>
          <td>0</td>
          <td>100</td>
        </tr>
      <TableEntry />
    </tbody>
  </table>
    )
  }
}

class TableEntry extends Component {
  render() {
    return(
      <tr>
        <th scope="row">2</th>
        <td>pullman14</td>
        <td>0</td>
        <td>100</td>
      </tr>
    )
  }
}

export default Table;
