import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

export default function Child1 () {
  const [count, setCount] = useState(0)

  // hooks error tips
  // if (count > 5) {
  //   const [error, setError] = useState(0)
  // }

  useEffect(() => {
    console.log('Child1 components cominging')
    return () => {
      console.log('Child1 components 卸载')
    }
  })

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>add</Button>
      <p>Child1 ==== {count}</p>
    </>
  )
}
