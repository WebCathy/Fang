// 1. 引入核心模块
import React, { Component } from 'react'

// 2. 引入样式文件
import '../../assets/styles/register.less'
//  引入输入框组件
import RegisterInput from "../../components/RegisterInput";
//  引入输入框组件
import FormBtn from "../../components/FormBtn";




// 引入标题图片
import leftIcon from '../../assets/images/login_1.png'

export default class RegisterPage extends Component {
  render() {
    return (
      <div className='register-box'>

         {/* 注册标题 */}
         <div className='register-title'>
             <img src={leftIcon} alt="" className="leftIcon"/>
             <h2>手机注册</h2>        
         </div>

         {/* 表单 */}
         <form className='login-Form'>
        
            {/* 输入框组件 */}  

            {/* 手机号 */}
            <RegisterInput type="string" value='手机号' placeholder='请输入手机号'/>
     
            {/* 验证码 */}
            <RegisterInput type="string" value='验证码' placeholder='请输入验证码' identifyCode/>
           
            {/* <div className='register-title'>
             <img src={leftIcon} alt="" className="leftIcon"/>
             <h2>注&nbsp;册</h2>        
         </div> */}
            {/* <FormBtn text value="我已同意"/> */}
            <div className='isAgree'>
              <input type="checkbox" className='checkBox'/>
              <span className='agree'>我已同意</span>
              <FormBtn text value="《用户服务协议》及《隐私权政策》"/>
            </div>
             {/* 登录 */}
            <FormBtn block value="登录"/>
            <FormBtn text value="已有账号？"/>
      
        </form>
      </div>
    )
  }
}
