import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from './components/account'
import Bonus from './components/bonus'
import Details from './components/details'
import { store } from './app/store'
import {Provider} from 'react-redux'
import Admin from './components/admin'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Provider store={store}>
    <Details/>
    <Account/>
    <Bonus/>
    <Admin/>
    </Provider>
    </>
  )
}

export default App
