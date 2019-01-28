import React, { Component } from 'react'
import { Route, Switch, Redirect,NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon } from 'antd';
import {mapStateToProps, mapDispatchToProps} from '../../store/mapToProps'
import './index.less'
import Header from '../../components/header/index.jsx'
import Homepage from '../index/index.jsx'
import Topic from '../topic/index.jsx'
import TextChat from '../textChat/index.jsx'
import VideoChat from '../videoChat/index.jsx'
import Collections from '../collections/index.jsx'
import Setting from '../setting/index.jsx'

class App extends Component {
  state = {
    navList: [
      {
        path:'/page/index',
        name: '首页',
        icon: 'home'
      },
      {
        path:'/page/topic',
        name: '话题',
        icon: 'eye-o'
      },
      {
        path:'/page/textChat',
        name: '聊天社区',
        icon: 'message'
      },
      {
        path:'/page/videoChat',
        name: '视频社区',
        icon: 'video-camera'
      },
      {
        path:'/page/collections',
        name: '我的收藏',
        icon: 'heart-o'
      },
      {
        path:'/page/setting',
        name: '设置',
        icon: 'setting'
      }
    ],
    routes: [
      {
        path: '/page/index',
        component: Homepage
      },
      {
        path: '/page/topic',
        component: Topic
      },
      {
        path: '/page/textChat',
        component: TextChat
      },
      {
        path: '/page/videoChat',
        component: VideoChat
      },
      {
        path: '/page/collections',
        component: Collections
      },
      {
        path: '/page/setting',
        component: Setting
      },
    ]
  }
  switchPage = (index) => {
    if(index === 0) {
      this.props.changeMenuIndex(-1)
    } else if(index === 5) {
      this.props.changeMenuIndex(0)
    }
  }
  render() {
    return (
      <div className="app">
        <Header changeMenuIndex={this.props.changeMenuIndex} />
        <div className="wrap">
          <div className="sidebar">
            {
              this.state.navList.map((item,index) => {
                return <NavLink activeClassName="actived" key={index} onClick={() => this.switchPage(index)} to={item.path}>
                  <Icon type={item.icon} />{item.name}
                </NavLink>
              })
            }
          </div>
          <div className="content">
            <Switch>
              {
                this.state.routes.map((item,index) => {
                  return <Route path={item.path} key={index} component={item.component} />
                })
              }
              <Redirect from='/page' to='/page/index'/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
