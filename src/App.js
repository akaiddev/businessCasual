import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import TopHeader from './components/TopHeader'
import About from './screens/About'
import Home from './screens/Home'
import Products from './screens/Products'
import Store from './screens/Store'

const App = () => {
  return (
    <Router>
      <TopHeader />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Products' component={Products} />
        <Route path='/Store' component={Store} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
