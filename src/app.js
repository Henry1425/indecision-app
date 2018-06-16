import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//  Children example below:
//  const Header = (props) => {
//      return (
//          <div>
//             {props.children}
//             <p>Header</p>
//             <p>More Header</p>
//          </div>
//      )
//  }



// ReactDOM.render((
//     <Header>
//         <div>
//           <h1>Template text</h1>
//           <p>Temp paragraph</p>
//         </div>
//     </Header>
// ), document.getElementById('app'));