/* 输入框组件*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//  引入样式文件
import '../assets/styles/formInput.less'


export default class FormInput extends Component {
    // 缺省配置
    static defaultProps={
        type:'text'
    }
    
    // 属性类型约束
    static propTypes={
        type:PropTypes.string,
        iconName: PropTypes.string
    }

  render() {
       // 获取传入参数
    let {type,iconName} = this.props;

    return (
      <div className='form-group'>
        <i className={'left-icon iconfont icon-' + iconName}></i>
        <input className='form-input' type={type}/>
      </div>
    )
  }
}
