import React, { Component } from 'react'
import styled from 'styled-components'
import peter from '../assets/images/index/peter.jpg'

class Author extends Component {
  render() {
    return (
      <Wrap>
        <div className="divider">
          <a href="http://haoqicat.com/gitbeijing">
            访问好奇猫网站上完整的《 Git 北京》视频课程
          </a>
        </div>
        <div>
          <div className="name-card">
            <img src={peter} alt="peter" />
            <div className="text">
              <div className="name">happypeter</div>
              <div className="job-title">
                <a href="http://haoduoshipin.com">本书作者，好多视频网作者</a>
              </div>
              挥汗写下本书，致敬北京 Linux 用户组的那些曾经帮助过我的朋友们。<a href="history.html">
                点击查看
              </a>{' '}
              Gitbeijing 的由来。
            </div>
          </div>
        </div>
      </Wrap>
    )
  }
}

export default Author

const Wrap = styled.div`
  .divider {
    margin-top: 50px;
    min-height: 140px;
    background: #008080;
    text-align: center;
    letter-spacing: 1px;
    font-size: 30px;
    font-weight: bold;
    line-height: 140px;
    color: #fff;
    a {
      color: #fff;
      &:hover {
        color: #77f0f0;
      }
    }
  }
  .divider.name-list {
    margin-top: -40px;
  }
  .name-card {
    background: transparent;
    position: relative;
    margin-bottom: 3em;
    background: #fff;
    padding: 2em;
    border-right: 30px solid #fff;
    min-height: 147px;
    width: 800px;
    margin: 50px auto;
    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      -ms-transform: skew(-3deg, -2deg);
      -webkit-transform: skew(-3deg, -2deg);
      -o-transform: skew(-3deg, -2deg);
      -moz-transform: skew(-3deg, -2deg);
      bottom: 14px;
      box-shadow: 0 16px 5px rgba(0, 0, 0, 0.2);
      height: 50px;
      left: 1px;
      max-width: 50%;
      width: 50%;
    }
    img {
      width: 60px;
      display: table-cell;
      float: left;
      border-radius: 50%;
      margin-right: 20px;
      margin-bottom: 50px;
    }
    .text {
      display: table-cell;
      font-size: 14px;
      .name {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
        font-family: 'Crete Round';
        font-style: italic;
        color: #e5533c;
      }
      .job-title {
        margin-bottom: 15px;
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`