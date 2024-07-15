import React from 'react'
import './Person.css'

export default function ({person,onDelete}) {

    function deletePerson(){
        onDelete(person.id);
    }

    function updateName(){
        
    }
  return (
    <li>
            <p onClick={updateName}>Name: {person.name}</p>
            <p>City: {person.city}</p>
            <p>Age: {person.age}</p>
            <button onClick={deletePerson}>Delete</button>
    </li>
  )
}
