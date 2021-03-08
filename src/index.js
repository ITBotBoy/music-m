import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from '@/pages/App'
import store from './store'
import { VERSION } from './config'

import '@/styles/index.scss'

// import registerServiceWorker from './registerServiceWorker';

// if(document.querySelector("#appQd")){
//   setTimeout(()=>{
//     document.body.removeChild(document.querySelector("#appQd"))
//   },2000);
// }

// 版权信息
window.mmPlayer = window.mmplayer = `欢迎使用!
当前版本为：V${VERSION}
歌曲来源于网易云音乐 (http://music.163.com)`
console.info(`%c${window.mmPlayer}`, `color:blue`)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
// registerServiceWorker();
