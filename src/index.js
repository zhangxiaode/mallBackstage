/**
 * react入口文件
 */
import ReactDOM from 'react-dom'

//antd引入
// import {  } from 'antd';
// import 'antd/dist/antd.css';

//基础类样式引入
import './style/reset.less'
import './style/main.less'

import registerServiceWorker from './registerServiceWorker'

//路由引入
import Routes from './router/index'
ReactDOM.render(Routes, document.getElementById("app"))
registerServiceWorker();
