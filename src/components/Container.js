import React from 'react';
import Drag from './pages/Drag';
import Todo from './pages/Todo'

export default function Container() {
  return (
    <div>
        <h1>Resumazing</h1>
      <Drag/>
      <Todo/>
    </div>
  )
}
