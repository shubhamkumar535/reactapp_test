import React from "react"
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom"
import { createBrowserHistory } from "history"
import Home from '../Component/Views/Home'
import Checkout from '../Component/Views/Checkout'
const Routes = () => {
  const hist = createBrowserHistory()

  return (
    <div>
      <HashRouter history={hist}>
      <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </HashRouter>
    </div>
  )
}
export default Routes

