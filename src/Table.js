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
    var order30, orderAll, IsDesc //shows if data is sorted ascending/descending
    //which set of data should be used? also, how is it sorted?
    var arr
    if (this.state.Is30Active){
      arr = this.state.campers30
      if(arr[0].recent > arr[1].recent) { //if descending
        order30 = " ▼"
        orderAll = ""
        IsDesc = true
      }
      else { //ascending
        order30 = " ▲"
        orderAll = ""
        IsDesc = false
      }
    }
    else {
      arr = this.state.campersAll
      if(arr[0].alltime > arr[1].alltime){
        orderAll = " ▼"
        order30 = ""
        IsDesc = true
      }
      else {
        orderAll = " ▲"
        order30 = ""
        IsDesc = false
      }
    }
        //entries is an array of TableEntries for specific campers
    var arrLength = arr.length
    var entries = arr.map(function(element, index){
      if (IsDesc){
        return <TableEntry key={element.username} index={index + 1} camper={element} />
      }
      return <TableEntry key={element.username} index={arrLength - index} camper={element} />
    })

    return (
      <div className="panel panel-default">
        <div id="leaderboard-title" className="panel-heading text-center">Leaderboard</div>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
          <th><a onClick={this.toggle30}>{"Points in Past 30 Days" + order30}</a></th>
          <th><a onClick={this.toggleAll}>{"All Time Points" + orderAll}</a></th>
        </tr>
      </thead>
      <tbody>
        {entries}
      </tbody>
    </table>
  </div>
    )
  }
}

class TableEntry extends Component {
  render() {
    return(
      <tr>
        <th scope="row">{this.props.index}</th>
        <td><img alt="free code camp" className="profile-pic img-responsive img-thumbnail" src={this.props.camper.img}/> {this.props.camper.username}</td>
        <td className="text-center">{this.props.camper.recent}</td>
        <td className="text-center">{this.props.camper.alltime}</td>
      </tr>
    )
  }
}

export default Table;
