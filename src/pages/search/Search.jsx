import React, { Component } from 'react'
import { Layout } from 'antd'
import SearchHeader from "./component/SearchHeader"
import SearchContent from "./component/SearchContent"
import "../../assets/css/search/search.css"
import FooterImg from "../../assets/img/footer.gif"

const { Header,Content,Footer } = Layout
export default class Search extends Component {
  render() {
    return (
        <Layout>
          <Header className="searchHeader">
            <SearchHeader/>
          </Header>
          <Content className="searchContent">
            <SearchContent/>
          </Content>
          <Footer className="searchFooter">
            <img src={FooterImg} alt="" className="footer-img"/>
          </Footer>
        </Layout>
    )
  }
}
