import React from 'react'
import CounterLogic from './components/CounterLogic'
import CounterUI from './components/CounterUI'


const CounterLogicUI = CounterLogic(CounterUI);

const App = () => {
  return (
    <div>
            <CounterLogicUI/>
    </div>
  )
}

export default App
