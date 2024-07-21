import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import React,{ useState,useRef,useEffect } from 'react';
import Counter from './Counter'
import Persons from './Persons'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import axios from 'axios'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

 export const Context = React.createContext(null);

function App() {

  const [text,setText] = useState('default');
  const [count,setCount] = useState(5);
  const [data, setData] = useState(null);
  const buttonRef = useRef(null)

  function update(){
    console.log(buttonRef.current)
    buttonRef.current.classList.add('btnClass')
    setText('new text')
    
  }

  useEffect(()=>{
    console.log("use effect")
  },[text])


  return (
    <Context.Provider value={[text,setText]} className="App">
      <p>paragraph {text}</p>
      <MyComponent />
      <button onClick={update} ref={buttonRef}>Update Text</button>
      <Counter countProp={count}/>

      <Persons />

      <BrowserRouter>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
        <Route path='*' element={<NotFound />}>404</Route>
      </Routes>
      
      </BrowserRouter>















      

      

      {/* <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
      </ul>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter> */}
    </Context.Provider>
  );
}

export default App;
