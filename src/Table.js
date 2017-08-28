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
    this.componentDidMount = this.componentDidMount.bind(this)
  }


  componentDidMount() {
    var campers30, campersAll
    var self = this

    $.getJSON(url30, function(data){
      campers30 = data
      if (campers30 && campersAll){
        self.setState({
          campers30: campers30,
          campersAll: campersAll
        })
      }
    })
    $.getJSON(urlAll, function(data){
      campersAll = data
      if (campers30 && campersAll){
        self.setState({
          campers30: campers30,
          campersAll: campersAll
        })
      }
    })
  }

  toggleSort() {

  }

  render() {
    //if campers is empty, render some "loading" table
    //(add placeholders to rows, design after the layout is set)
    //else, render the actual table with campers
    if (!this.state.campers30){
      return <p>Loading...</p>
    }
    //entries is an array of TableEntries for specific campers
    var entries = this.state.campers30.map(function(element, index){
      return <TableEntry key={index.toString() + element.username} index={index} camper={element} />
    })

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
        {entries}
      </tbody>
    </table>
    )
  }
}

class TableEntry extends Component {
  render() {
    return(
      <tr>
        <th scope="row">{this.props.index+1}</th>
        <td>{this.props.camper.username}</td>
        <td>{this.props.camper.recent}</td>
        <td>{this.props.camper.alltime}</td>
      </tr>
    )
  }
}

export default Table;
