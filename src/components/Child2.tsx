import React, { useEffect } from 'react'

export default function Child2 () {
  useEffect(() => {
    console.log('Child2 components cominging')
    return () => {
      console.log('Child2 components 卸载')
    }
  })

  return (
    <>
      <p>Child2</p>
    </>
  )
}
