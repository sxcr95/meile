import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
import Search from "./pages/search/Search"
import Cart from "./pages/cart/Cart"

class App extends Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route path="/search" exact component = {Search}/>
              <Route path="/cart" exact component = {Cart}/>
              {/* <Redirect to = "/login" from = "/" exact/> */}
              {/* <Route path="/" component = {NotFound}/> */}
            </Switch>
          </Router>
        )
    }
}


export default App;