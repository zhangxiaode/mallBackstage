import React, { Component } from 'react'
import './index.less'
class Topic extends Component {
  state = {
    
  }
  changeTopic = (chooseIndex) => {
    this.setState({
      chooseIndex
    })
  }
  render() {
    return (
      <div className="topic">
        话题页
      </div>
    );
  }
}

export default Topic
