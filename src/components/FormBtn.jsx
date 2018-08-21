// 1. 引入核心模块
import React from 'react'
// 2. 引入样式文件
import '../assets/styles/formBtn.less'

export default (props) => {
  // 获取传入参数
  let {value, block, text} = props;
 // 定义样式
 let btnClz = 'form-button';
 // 判断是否是块级组件
 if(block){
     btnClz += ' block'
 }

return (
 text===true ?
 <p className="text-button">{value}</p>:
 <button type="button" className={btnClz}>{value}</button>
    )
}
