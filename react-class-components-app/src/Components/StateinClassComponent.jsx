import React, { Component } from 'react'

class StateinClassComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }
    }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.setState({count : this.state.count + 10})}>Increament</button>
      </div>
    )
  }
}

export default StateinClassComponent;

















// import React, { Component } from 'react'

// class StateinClassComponent extends Component {

//     constructor(){
//         super();

//         this.state = {
//             count : 0,
//         }
//     }

//     incrementCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Count : {this.state.count}</h1>
//                 <button onClick={this.incrementCount}>Increment</button>
//             </div>
//         )
//     }
// }

// export default StateinClassComponent;