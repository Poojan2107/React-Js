import React from 'react'
import StateinClassComponent from './Components/StateinClassComponent';
// import GreetComponent from './Components/GreetComponent'
// import { NamedComponent } from './Components/NamedComponent'
// import ClassComponent from './Components/ClassComponent'
// import Propscomponents from './Components/Propscomponents'
const App = () => {
  let age = 18 ;
  return (
    <div>
      {/* <ClassComponent/>
      <Propscomponents/>
      <NamedComponent/>
      <GreetComponent name="Poojan." age={age}/> */}
      <StateinClassComponent/>
    </div>
  )
}

export default App

