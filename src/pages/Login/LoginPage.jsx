// 1. 引入核心模块
import React, { Component } from 'react'

// 2. 引入样式文件
// 2.1  引入登录表单的样式文件
import '../../assets/styles/login.less'
// 2.2  引入输入框组件
import FormInput from "../../components/FormInput";
// 2.3  引入登录组件
import FormBtn from "../../components/FormBtn";

// 引入logo图片
import logoImg from '../../assets/images/logo.png';

export default class LoginPage extends Component {
  render() {
    return (
      <div className='login-box'>

         {/* logo图 */}
         <img src={logoImg} alt="" className="logo-img"/>
          {/* 登录表单 */}
          <form className='login-Form'>

            {/* 输入框组件 */}
            <FormInput iconName="shouji"/>
            <FormInput type="password" iconName="suo"/>

            {/* 登录框组件 */}
           
            <FormBtn block value="登录"/>
            
           
            <FormBtn text value="忘记密码？"/>
            
          
            <FormBtn value="免费注册"/>&emsp;
            
           
            <FormBtn value="游客登录"/>
         </form>
      </div>
    )
  }
}
