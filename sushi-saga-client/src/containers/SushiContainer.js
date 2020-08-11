import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import LessButton from '../components/LessButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushis.map(sushi => <Sushi sushi={sushi} key={Math.random()} handleEatSushi={this.props.handleEatSushi}/>)
          }
          <MoreButton handleMoreSushi={this.props.handleMoreSushi}/>
          <LessButton handleLessSushi={this.props.handleLessSushi}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer