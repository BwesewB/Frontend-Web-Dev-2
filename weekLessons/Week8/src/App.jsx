import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  function toggleShow(){
    setShow(!show);
  } //this toggles the thing back and forth


  return(
    <>
      {/* <input type="text" onKeyDown={handleInput}/> */}
      <p>
        <button onClick={toggleShow}>Toggle Show</button>
      </p>
      {show && <Effect />}
    </>
  );
}


function Effect() {
  
  const [name, setName] = useState('John Doe')
  const nameRef = useRef();

  function handleInput(e) {
    if (e.key === 'Enter'){
      setName(e.target.value);
      e.target.value = '';
    }
  }

  useEffect(() => {
    console.log('component mounted')


  })

  useEffect(() => {
    console.log(`name prop change to ${name}`)

    return () => console.log('Cleaning up!')
  },[name]); //empty list run once


  useEffect(() => {
    nameRef.current.focus();
    document.title = `Hello ${name}`
  }, [name]) //only renders code ONCE. CHANGES THE NAME TO THE INPUT VALUE

  console.log('Before render')

  return(
    <>
      <p>
        <input ref={nameRef} type="text" onKeyDown={handleInput}/>
      </p>
      <p>Hello, {name}</p>
    </>

  )
}

export default App


//------------------------------------

