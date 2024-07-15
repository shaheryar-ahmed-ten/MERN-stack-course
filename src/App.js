import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import React,{ useState } from 'react';
import Counter from './Counter'
import Persons from './Persons'

// function MyComponent(){
//   return (
//     <div>
//       <p>my component paragraph</p>
//     </div>
//   )
// }

function App() {

  const [text,setText] = useState('default');
  const [count,setCount] = useState(5);
  

  function update(){
    setText('new text')
  }
  return (
    <div className="App">
      <p>paragraph {text}</p>
      <MyComponent />
      <button onClick={update} >Update Text</button>
      <Counter countProp={count}/>

      <Persons />
    </div>
  );
}

export default App;
