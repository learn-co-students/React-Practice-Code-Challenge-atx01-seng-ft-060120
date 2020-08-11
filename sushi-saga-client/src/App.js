import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    plates: [],
    start: 0,
    end: 4,
    money: 100
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({
      sushis
    }))
  }

  handleMoreSushi = () => {
    const newStart = this.state.start + 4
    const newEnd = this.state.end + 4
    this.setState({
      start: newStart,
      end: newEnd
    })
  }

  handleLessSushi = () => {
    const newStart = this.state.start - 4
    const newEnd = this.state.end - 4
    this.setState({
      start: newStart,
      end: newEnd
    })
  }

  handleEatSushi = (id) => {
    const updatedSushiArray = this.state.sushis.map(sushi => sushi.id === id ? {} : sushi)
    const sushi = this.state.sushis.find(sushi => sushi.id === id)
    const updatedMoney = this.state.money - sushi.price
    
    this.setState({
      sushis: updatedSushiArray,
      plates: [...this.state.plates, sushi],
      money: updatedMoney
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis.slice(this.state.start, this.state.end)}
          handleMoreSushi={this.handleMoreSushi}
          handleLessSushi={this.handleLessSushi}
          handleEatSushi={this.handleEatSushi}
        />
        <Table
          money={this.state.money}
          plates={this.state.plates}
        />
      </div>
    );
  }
}

export default App;