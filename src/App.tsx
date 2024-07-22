import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import inlineStyles from './App.scss?inline';
import './App.scss';
import styles from './App.module.scss';
import user from './utils/json/user.json';
import userUrl from './utils/json/user.json?url';
import userRaw from './utils/json/user.json?raw'; // returns a raw json object
import meImageUrl from './assets/me-work.jpeg?url'; // return url path to image folder
import meImage from './assets/me-work.jpeg';

function App() {
  const [count, setCount] = useState(0);

  console.log(styles);
  console.log(user, userRaw, userUrl);

  return (
    <>
      <style>
        {inlineStyles}
      </style>
      <div>
        <a href="https://www.linkedin.com/in/denys-bokov-339b22277/" target="_blank">
          <img src={meImage} className="me" alt="Vite logo" />
          {meImageUrl}
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
