import React, { Component } from 'react'
import { connect } from 'react-redux'

import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'
import './index.less'

class Index extends Component {
  state = {
  }
  componentDidMount() {
  }
  switchPage(index) {
  }
  render() {
    return (
      <div className="home">
        首页
      </div>
    )
  }
}
Index = connect(mapStateToProps, mapDispatchToProps)(Index)

export default Index;
