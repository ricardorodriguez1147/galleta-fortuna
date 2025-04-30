import { useState } from 'react'
import './App.css'
import phrases from './data/phrases.json'
import { getItemRandom } from './lib/utils'
import Card from './components/card/card';
import Button from './components/button/button';


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
