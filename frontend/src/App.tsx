import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { getAboutData } from './services/api'

function App() {
  const [data , setData] = useState<any>(null);

  useEffect(() => {
    getAboutData().then(setData).catch(console.error);
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Hi, I'm {data.name} and I'm a {data.role}.</h1>
          <p>{data.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
