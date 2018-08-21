import React,{Component} from 'react';
//引入antd
import { Carousel } from 'antd-mobile';

//引入样式
import '../../assets/styles/HomePage.less';
import 'antd-mobile/dist/antd-mobile.css';
import bannerImg1 from '../../assets/images/banner1.jpg'
import bannerImg2 from '../../assets/images/banner2.jpg'

//引入组件
import HomeTop from "../../components/HomeTop";
import Feature from "../../components/Feature";
import FourList from "../../components/FourList";
import GuessYouLike from "../GuessYouLike/GuessYouLike";




export default class HomePage extends Component {
  render() {
    return (
      <div className='home-Page'>
        {/* 头部搜索 */}
        <HomeTop/>
        {/* 轮播 */}
        <Carousel className="space-carousel"
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
         
            <a
              key={1}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                width:'100%',
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={bannerImg1}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
            <a
              key={2}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                width:'100%',
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={bannerImg2}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
        </Carousel>
      
          {/* 8大特色 */}
            <Feature/>
          {/* 4大推广 */}
            <FourList/>

          {/* 猜你喜欢 */}
          <GuessYouLike/>
      </div>
    )
  }
}
