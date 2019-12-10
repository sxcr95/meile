import React, { Component } from 'react'
import { Input } from 'antd'
import "../../../assets/css/search/searchHeader.css"

const { Search } = Input
export default class SearchHeader extends Component {
  render() {
    return (
      <div style={{width:"100%"}}>
        <Search placeholder="搜索商品" onSearch={value => console.log(value)} enterButton />
        <span className="annuler">取消</span>
      </div>
    )
  }
}
