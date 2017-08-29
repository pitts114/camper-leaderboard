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
      campersAll: null,
      Is30Active: true //what is the active stat being shown? 30 if true, all if false
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.toggle30 = this.toggle30.bind(this)
    this.toggleAll = this.toggleAll.bind(this)
  }


  componentDidMount() {
    var campers30, campersAll
    var self = this

    $.getJSON(url30, function(data){
      campers30 = data
      if (campers30 && campersAll){
        self.setState({
          campers30: campers30,
          campersAll: campersAll,
          Is30Active: self.state.Is30Active
        })
      }
    })
    $.getJSON(urlAll, function(data){
      campersAll = data
      if (campers30 && campersAll){
        self.setState({
          campers30: campers30,
          campersAll: campersAll,
          Is30Active: self.state.Is30Active
        })
      }
    })
  }


  toggle30() {
    if (this.state.Is30Active){
      this.setState({
        campers30: this.state.campers30.reverse(),
        campersAll: this.state.campersAll,
        Is30Active: this.state.Is30Active
      })
    }
    else{
      this.setState({
        campers30: this.state.campers30,
        campersAll: this.state.campersAll,
        Is30Active: !this.state.Is30Active
      })
    }
  }

  toggleAll() {
    if (!this.state.Is30Active) {
      this.setState({
        campers30: this.state.campers30,
        campersAll: this.state.campersAll.reverse(),
        Is30Active: this.state.Is30Active
      })
    }
    else{
      this.setState({
        campers30:this.state.campers30,
        campersAll: this.state.campersAll,
        Is30Active: !this.state.Is30Active
      })
    }

  }

  render() {
    //if campers is empty, render some "loading" table
    //(add placeholders to rows, design after the layout is set)
    //else, render the actual table with campers
    if (!this.state.campers30){
      return <p>Loading...</p>
    }
    var order30, orderAll //shows if data is sorted ascending/descending
    //which set of data should be used? also, how is it sorted?
    var arr
    if (this.state.Is30Active){
      arr = this.state.campers30
      if(arr[0].recent > arr[1].recent) { //if descending
        order30 = " ▼"
        orderAll = ""
      }
      else { //ascending
        order30 = " ▲"
        orderAll = ""
      }
    }
    else {
      arr = this.state.campersAll
      if(arr[0].alltime > arr[1].alltime){
        orderAll = " ▼"
        order30 = ""
      }
      else {
        orderAll = " ▲"
        order30 = ""
      }
    }
        //entries is an array of TableEntries for specific campers
    var entries = arr.map(function(element, index){
      return <TableEntry key={index.toString() + element.username} index={index} camper={element} />
    })

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
          <th><a id="days30" onClick={this.toggle30}>{"Points in Past 30 Days" + order30}</a></th>
          <th><a id="daysall" onClick={this.toggleAll}>{"All Time Points" + orderAll}</a></th>
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
