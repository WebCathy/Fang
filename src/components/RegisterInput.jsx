/* 输入框组件*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//  引入样式文件
import '../assets/styles/formInput.less';
import '../assets/styles/registerInput.less';


export default class RegisterInput extends Component {
    // 缺省配置
    static defaultProps={
        type:'string'
    }
    
    // 属性类型约束
    static propTypes={
        type:PropTypes.string
    }

  render() {
       // 获取传入参数
    let {value,type,placeholder,identifyCode} = this.props;
     // 定义样式
    let btnClz = 'form-button';
    return (
        identifyCode?
      <div className='form-group'>
        <p className="text-button" >{value}</p>
        <input className='form-input' type={type} placeholder={placeholder}/>
        <button type="button" className={btnClz}>{'获取'+value}</button>
      </div>:
      <div className='form-group'>
        <p className="text-button" >{value}</p>
        <input className='form-input' type={type} placeholder={placeholder}/>
    </div>
    )
  }
}

