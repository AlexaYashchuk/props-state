import { useState } from 'react'
import './App.css'
import ChildComponent from './components/functionalComp/ChildComponent'
import SiblingComponent from './components/functionalComp/SiblingComponent'
import ChildComponentClass from './components/classComp/ChildComponentClass'
import SiblingComponentClass from './components/classComp/SiblingComponentClass' 


function ParentComponent() {
  const [counter , setCounter] = useState(0)

  const increment = () => {
    setCounter((counter) => counter +1 )
  }

  const decriment = () => {
    setCounter((counter) => {
      return counter > 0 ? (counter-1): (counter)
    });
  }

  //Функция обновления состояния из useState может принимать значение или функцию, которая вычисляет новое значение состояния на основе предыдущего состояния. 
  const reset = () => {
    setCounter(0)
  }

  const randomValue = Math.floor(Math.random()*(10-1)+1);
  const random = () => {

  setCounter(randomValue)
    
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
      <hr />
      <ChildComponentClass name = {`Павел`} counter = {counter}/>
      <SiblingComponentClass/>
    </div>
  )
}

export default ParentComponent
