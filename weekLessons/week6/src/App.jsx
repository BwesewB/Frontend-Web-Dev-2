import { useState } from 'react'

const initialStudents = [
  {
    firstName: 'Chi li',
    lastName:'Huang',
    race:'African American'
  },
  {
    firstName: 'Sagdheep',
    lastName:'Hagpreet',
    race:'Indian'
  },
  {
    firstName: 'Zembola',
    lastName:'Booda',
    race:'Chinese'
  },
]

function App() {
  // const [wholeName, setWholeName] = useState('');
  // const [age, setAge] = useState('')
  // const [type, setType] = useState('')

  // function handleWholeName(e) {
  //   setWholeName(e.target.value)
  // }

  // function handleAge(e) {
  //   setAge(e.target.value)
  // }

  // function handleClick(e) {
  //   setType(`${wholeName} is my type when they are ${age}`)
  // }

  const [students, setStudents] = useState(initialStudents)

  const [student, setStudent] = useState({
    firstName:'',
    lastName:'',
    race:'',
  })

  const studentList = students.map((student, index) => (
    <p key={index}>{student.firstName} {student.lastName}, {student.race}</p>
  ))

  function handleSubmit(e) {
    e.preventDefault();
    setStudents([...students, student])
  }

  return (
    <>
      
       <form onSubmit={handleSubmit}> {/*this is a submit handler. it should accept a event object */ }
        <input 
          type="text"
          value={student.firstName}
          onChange={(e) => setStudent({...student, firstName: e.target.value})} /* as a function that accepts an e(event) object */
        />
        <input 
          type="text"
          value={student.lastName}
          onChange={(e) => setStudent({...student, lastName: e.target.value})}
        />
        <input 
          type="text"
          value={student.race}
          onChange={(e) => setStudent({...student, race: e.target.value})}
        />
        <button>Submit to me</button>
      </form>
      {studentList}

      {/* <form>
        <input 
          type="text" 
          name='name'
          value={wholeName} 
          onChange={handleWholeName}
        
        /> 
        <input 
          type="text" 
          name='age'
          value={age} 
          onChange={handleAge}
        
        />

        <button type="button" onClick={handleClick}>Change</button>
      </form>
      <h1>I eat {type}</h1> */} {/* This tracks the value of the input */}

      <div>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
      </div>


    </>
  )
}

function random(n) {
  return Math.floor(Math.random() * n)
}

function Tile() {
  const [color, setColor] = useState('blue');

  const changeColor = () => {
    const colors = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    setColor(colors);
  };

  return (
    <div         
      style={{
        width: '50vw',
        height: '100px',
        backgroundColor:color
    }}
    onClick={changeColor}
    ></div>
  )
}

export default App
