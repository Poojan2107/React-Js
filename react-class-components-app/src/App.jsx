import React from 'react'
import GreetComponent from './Components/GreetComponent'
// import { NamedComponent } from './Components/NamedComponent'
// import ClassComponent from './Components/ClassComponent'
// import Propscomponents from './Components/Propscomponents'
const App = () => {
  let age = 18 ;
  return (
    <div>
      {/* <ClassComponent/>
      <Propscomponents/>
      <NamedComponent/> */}
      <GreetComponent name="Poojan." age={age}/>
    </div>
  )
}

export default App

