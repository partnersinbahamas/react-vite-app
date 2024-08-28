import React from 'react';
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import inlineStyles from './App.scss?inline';
import './App.scss';
import styles from './App.module.scss';
// @ts-ignore
// 'json' is reduced path from vite.config file
import user from 'json/user.json';
import userUrl from 'json/user.json?url';
import userRaw from 'json/user.json?raw'; // returns a raw json object
import meImageUrl from './assets/me-work.jpeg?url'; // return url path to image folder
import meImage from './assets/me-work.jpeg';
// @ts-ignore
import products from './utils/csv/products.csv';

/*
  eager: disable a dynamic behavior, so it call module from box;
  import: 'your exported variable' | 'default': returns only exported variable;
  as: 
    - raw: returns module as a raw string;
    - url: path to module;

  ^ moudles params description
  const mathModules = import.meta.glob('/src/mathFunctions/*.ts', { import: 'funcDescription', eager: true });
*/

const mathModules = import.meta.glob('/src/mathFunctions/*.ts', ); // eager disable a dynamic behavior, so it call modules from box

function App() {
  const devMode = import.meta.env.APP_DEV_MODE;
  
  const [count, setCount] = useState(0);
  const [maths, setMaths] = useState<any[]>([]);
  console.log(styles);
  console.log(user, userRaw, userUrl);
  console.log(mathModules);
  console.log(products);

  useEffect(() => {
    Object.values(mathModules)
      .forEach((importModule) =>
        importModule().then((module: any) =>
          setMaths((current) => [...current, module.default(1, 2)])));
  }, []);

  return (
    <>
      <style>
        {inlineStyles}
      </style>

      <ul style={{ position: 'absolute', right: '10px' }}>
        {maths.map((math) => (
          <li>{math}</li>
        ))}
      </ul>
      <pre>{devMode}</pre>
      <div>
        <a href="https://www.linkedin.com/in/denys-bokov-339b22277/" target="_blank">
          <img src={meImage} className="me" alt="Vite logo" />
          {meImageUrl}
        </a>
         {/* from public folder extends fast path */}
        <img src='./me-young.png' className="me me-no-position" alt="Vite logo" />
        Public
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
