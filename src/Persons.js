import React,{useState} from 'react'
import Person from './Person'

export default function Persons() {
  
    const [persons,setPersons] = useState([
        {
          id:1,
          name:'Ahmed',
          city: 'Karachi',
          age:20
        },
        {
          id:2,
          name:'Ali',
          city: 'Lahore',
          age:30
        },
        {
          id:3,
          name:'Usman',
          city: 'Islamabad',
          age:25
        }
      ])

      function deletePerson(id){
        const filteredPerson = persons.filter(person => person.id !== id)
        setPersons(filteredPerson)
      }

     // deletePerson(1)
  return (
    <div>
        <form>
            <label for='Name'>Name</label>
            <input type='text' id='Name'/>

            <label for='City'>City</label>
            <input type='text' id='City'/>

            <label for='Age'>Age</label>
            <input type='text' id='Age'/>

            <input type='submit' />
        </form>
        <ul>
      {
        persons.map(person => (
          <Person person={person} key={person.id} onDelete={deletePerson}/>
        ))
      }
    </ul>
    </div>
  )
}
