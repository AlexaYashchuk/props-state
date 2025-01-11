import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'
import SiblingComponent from './components/SiblingComponent'

function ParentComponent() {
  const [counter , setCounter] = useState(0)

  const increment = () => {
    setCounter((counter) => counter +1 )
  }

  const decriment = () => {
    setCounter((counter) => {
      if (counter > 0) {
        return counter -1
      }
      else return counter
    } )
  }

  const reset = () => {
    setCounter((counter) => counter = 0 )
  }

  const random = () => {
    setCounter((counter) => {
      counter = Math.floor(Math.random()*(10-1)+1)
      return counter;
    })
  }

  return (

    <div>
      <p>Текущее значение счетчика: {counter}</p>
      <div>
        <button onClick={increment}>Увеличить</button>
        <button onClick={reset}>Сбросить</button>
        <button onClick={random}>Случайное значение</button>
        <button onClick={decriment}>Уменьшить</button>
      </div>
      <ChildComponent name = {`Александра`} counter = {counter}/>
      <SiblingComponent/>
    </div>
  )
}

export default ParentComponent