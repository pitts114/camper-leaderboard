import React, {Component} from 'react'


//This table is given a list of Campers (including their username amd pic,
//30 day points, and all time points)
//The table will sort the campers by points
class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //how is this sorted?
      sorted: "Desc30", //desc30, asc30, descAll, ascAll
      campers: null
    }
  }

  fetchCampers() {
    //getJSON the 30 day and all time api's.
    //Once retrieved, setState to rerender table
  }

  sort30Desc() {
    return null
  }
  sort30Asc() {
    return null
  }
  sortAllDesc() {
    return null
  }
  sortAllAsc() {
    return null
  }
  sort() {
    switch(this.state.sorted) {
      case "Desc30":
        this.sort30Desc();
        break;
      case "Asc30":
        this.sort30Asc();
        break;
      case "AllDesc":
        this.sortAllAsc();
        break;
      case "AllAsc":
        this.sortAllDesc();
        break;
      default:
      console.log("which sort method?");
        break;
    }
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
