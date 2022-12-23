import { useState, useRef, useEffect } from 'react';

function App() {
  const [randomInput, setRandomInput] = useState('');
  const renders = useRef(0);
  const handleChange = (e) => {
    setRandomInput(e.target.value);
    
  }
  
  const changeColor = (e) => {
    // Write Code Here.
  }
  useEffect(()=>{
    renders.current=renders.current+1; //finds how many times the component is rendered
  })


  return (
    <main className="App">
      <input
        type="text"
        value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
      <p class="render">Renders: {renders.current}</p>
      <br/> <br/>
      <section>
        <button onClick={changeColor}>Change color</button>
        
      </section>
      <br /><br />
      <br /><br />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;
