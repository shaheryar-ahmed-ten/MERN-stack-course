import React,{useContext} from 'react'
import './Person.css'
import {Context,myName} from './App'

export default function ({person,onDelete}) {
  const [text,setText] = useContext(Context)

    function deletePerson(){
        onDelete(person.id);
    }

    function updateName(){
        
    }

    function handleChange(){
      setText("child comp text")
    }
  return (
    <li>
        text:{text}
        <button onClick={handleChange}>change text</button>
            <p onClick={updateName}>Name: {person.name}</p>
            <p>City: {person.city}</p>
            <p>Age: {person.age}</p>
            <button onClick={deletePerson}>Delete</button>
    </li>
  )
}
