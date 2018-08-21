//引入核心文件
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 引入自定义组件
// import Login from './Login/LoginPage';
// import Register from './Register/RegisterPage';
import Home from './Home/HomePage';

//声明类
class App extends Component {
  render() {
    return (
      // <Login/>
      // <Register/>
      <Home/>
    )
  }
}

export default App

//  渲染dom
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)


