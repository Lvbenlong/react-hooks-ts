import React, { useState } from 'react'
import { Button } from 'antd'
import Child1 from '../components/Child1'
import Child2 from '../components/Child2'

function App () {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <Button type="primary" onClick={() => setShow(!show)}>show</Button>
      {show ? <Child1 /> : <Child2 />}
    </div>
  )
}

export default App
