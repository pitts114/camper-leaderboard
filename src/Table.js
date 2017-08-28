import React, {Component} from 'react'


//This table is given a list of Campers (including their username amd pic,
//30 day points, and all time points)
//The table will sort the campers by points
export class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //how is this sorted?
      sorted: "Desc30", //desc30, asc30, descAll, ascAll
      campers: []
    }
  }

  sort30Desc() {

  }
  sort30Asc() {

  }
  sortAllDesc() {

  }
  sortAllAsc() {

  }
  sort() {
    switch(this.state.sorted) {
      case "Desc30":
        sort30Desc();
        break;
      case "Asc30":
        sort30Asc();
        break;
      case "AllDesc":
        sortAllAsc();
        break;
      case "AllAsc":
        sortAllDesc();
        break;
      default:
      console.log("which sort method?");
        break;
    }
  }

  render() {
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


export class TableEntry extends Component {
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
