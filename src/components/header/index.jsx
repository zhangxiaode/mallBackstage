import React, { Component } from 'react';
import './index.less';

import { Avatar, Input } from 'antd';
const Search = Input.Search;

class Header extends Component {
  state = {
  }
  handleSearch() {

  }
  render() {
    return (
      <div className="header">
        <div className="headerLeft">
          <div className="logo">logo</div>
          <div className="search">
            <Search
              placeholder="搜索你感兴趣的内容"
              onSearch={this.handleSearch}
              enterButton
            />
          </div>
        </div>
        <div className="userInfo">
          <Avatar icon="user" />
          <span>zhangxiaode</span>
        </div>
      </div>
    );
  }
}
export default Header;
