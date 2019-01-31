import React, { Component } from 'react'
import { connect } from 'react-redux'

import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'
import './index.less'

import ajax from '../../utils/ajax'

class Index extends Component {
  state = {
  }
  componentDidMount() {
    ajax.get('/findUser', {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    ajax.get('/addUser', {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    ajax.get('/updateUser', {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    ajax.get('/deleteUser', {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
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
