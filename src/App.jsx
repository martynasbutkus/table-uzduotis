import React, { useState } from 'react';
import './App.css';
import removeFirst from './Components/Button/removeFirst';
import removeLast from './Components/Button/removeLast';
import AddTable from './Components/Inputs/Inputs';

const App = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [data, setData] = useState([])

  return (
    <div>
      <h1>Append table</h1>
      <div className='inputs'>
        <input type="text" id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}/>
        <input type="text" id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}/>
        <input type="number" id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}/>
      </div>

      <div className='buttons'>
        <button onClick={() => AddTable(data, setData, firstName, lastName, age)}>Pridėti</button>
        <button onClick={() => removeFirst(data, setData)}>Ištrinti pirmą</button>
        <button onClick={() => removeLast(data, setData)}>Ištrinti paskutinį</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th className='darker'>Parvardė</th>
            <th>Amžius</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;
