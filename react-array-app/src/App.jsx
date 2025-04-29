import React from "react";
import MyComponent  from "./components/MyComponent";
import Greet from "./components/Greet";
import SayHello from "./components/SayHello";
import UserList from "./components/UserList"
import FruitList from "./components/FruitList"; 
import FilterData from "./components/FilterData";
import SpreadData from "./components/SpreadData";

const App = () => {
  return(
    <div>
      {/* <h1>Hello Poojan!</h1> 
      <Greet/>
      <MyComponent/>
      <SayHello/>
      <UserList/>  
      <FruitList/>
      <FilterData/> */}
      <SpreadData/>
    </div>
  )
}

export default App;