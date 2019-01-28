import React, { Component } from 'react'
import { connect } from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'

import './index.less'

class Setting extends Component {
  state = {
    
  }
  componentDidMount() {
  }
  switchPage(index) {
  }
  render() {
    return (
      <div className="setting">
        设置
      </div>
    )
  }
}
Setting = connect(mapStateToProps, mapDispatchToProps)(Setting)
export default Setting
