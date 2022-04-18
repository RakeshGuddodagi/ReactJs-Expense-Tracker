import React from 'react'
import Home from './Pages/Home'
import index from './Pages/Home'
import Header from './Components/header/head'
// /import { Router } from 'react-router-dom';
import Footer from './Components/Footer/footer'
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import AddExpense from './Pages/add-expense/addExpense'

 function App() {
  return (
    <Router>
      <Header /> 
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/addExpense' component={AddExpense}/>

      </Switch>
      <Footer/>
    </Router>
      
  )
}
export default App