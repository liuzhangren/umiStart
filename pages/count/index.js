import React from 'react'
import 'antd/dist/antd.css'
import styl from './index.css'
import {
  Button
} from 'antd'


export default class Count extends React.Component {
  state = {
    count: 0
  }
  add() {
    this.setState({
      count: this.state.count + 1
    })
    console.log('hello:', this.state) //异步的问题
  }
  //这里是对setState异步的例子
  // async add() {
  //   await this.setState({
  //     count: this.state.count + 1
  //   })
  //   await console.log('hello:', this.state)
  // }
  less() {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className={styl.center}>
        <span className={styl.area}>{this.state.count}</span>
        <Button onClick={this.add.bind(this)} type='primary'>+</Button>
        <Button onClick={this.less.bind(this)} type='danger'>-</Button>
      </div>
    )
  }
}