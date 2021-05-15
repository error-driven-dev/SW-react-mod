import './App.css'
import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { MyDogsPage, HomePage } from './pages/index'
import { ControlledForm } from './components/formExamples/ControlledForm'
import { UncontrolledForm } from './components/formExamples/UncontrolledForm'

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <HomePage></HomePage>
      </Route>
      <Route path='/MyDogs'>
        <MyDogsPage></MyDogsPage>
      </Route>
      <Route path='/ControlledForm'>
        <ControlledForm></ControlledForm>
      </Route>
      <Route path='/UnControlledForm'>
        <UncontrolledForm></UncontrolledForm>
      </Route>
    </Router>
  )
}

export default App
