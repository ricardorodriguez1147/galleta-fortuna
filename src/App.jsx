import { useState } from 'react'
import './App.css'
import phrases from './data/phrases.json'
import { getItemRandom } from './lib/utils'
import Card from './components/card/Card.jsx';
import Button from './components/button/Button.jsx';



function App() {
  const [phrase, setPhrase] = useState(phrases[0]);

  const handlerChange = () => {
    setPhrase(getItemRandom(phrases));
  }

  return (
    <>
    <div className='container' style={{ backgroundColor: phrase.colorfondo }}>
     
     <Card phrase={phrase}/>

    <Button handlerChange={handlerChange}  />
    
    </div>

    </>
  )
}

export default App
