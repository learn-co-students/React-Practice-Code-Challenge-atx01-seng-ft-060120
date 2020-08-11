import React, { Component } from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    this.setState({
      eaten: true
    })
    this.props.handleEatSushi(this.props.sushi.id)
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.eatSushi}>
          { 
            this.state.eaten === false ?
              <img src={this.props.sushi.img_url} width="100%" alt={this.props.sushi.name}/>
            :
              null
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi