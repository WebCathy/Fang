
import React, { Component } from 'react'
// 首页头部组件
import { NavBar, Icon} from 'antd-mobile';
//  引入样式文件
import '../assets/styles/HomeTop.less'

//  引入antD-mobile样式文件
import 'antd-mobile/dist/antd-mobile.css';

export default class HomeTop extends Component {
  render() {
    return (
      <div className='header'>
        <NavBar
            mode="dark"
            leftContent={[
                <p key="0">成都</p>,
                <Icon key="1" type="down" />,
            ]}
            rightContent={[
                <i key="0"  className='iconfont icon-ditu8'/>,
                <p key="1">地图</p>,
            ]}
            >

            {/* 搜索框 */}
            <div className='search-box'>
                 <span className='iconfont icon-sousuo'></span>
                 挑好房  To宜居
            </div>
        </NavBar>
      </div>
    )
  }
}
