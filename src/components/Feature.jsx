import React, { Component } from 'react'
import { Flex} from 'antd-mobile';

// 引入样式文件
import '../assets/styles/feature.less'

// 引入精灵图
import featureImg from '../assets/images/feature_img.png'

export default class Feature extends Component {
  render() {
    return (
      <div className='feature-box'>
         <Flex>
            <Flex.Item  align="center"> 
              <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400}}/>
              <p>新房</p>
            </Flex.Item>
            <Flex.Item align="center">
            <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-50}}/>
              <p>二手房</p>
            </Flex.Item>
            <Flex.Item align="center">
            <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-100}}/>
              <p>租房</p>
            </Flex.Item>
            <Flex.Item align="center">
            <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-150}}/>
              <p>商铺写字楼</p>
            </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item align="center">
          <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-200}}/>
            <p>卖房</p>
          </Flex.Item>
          <Flex.Item align="center">
          <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-250}}/>
            <p>海外地产</p>
          </Flex.Item>
          <Flex.Item align="center">
          <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-300}}/>
            <p>小区房价</p>
          </Flex.Item>
          <Flex.Item align="center">
          <i style={{display:'block',backgroundImage:'url('+featureImg+')',width:50,height:50,backgroundSize:400,backgroundPositionX:-350}}/>
            <p>问答</p>
          </Flex.Item>
      </Flex>
    </div>
    )
  }
}
