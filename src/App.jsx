import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {

  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x : 0, y : 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable){
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  return (
    <main>
    <div 
    style = {{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}/>

    <button onClick={() => setEnable(!enable)} className='btn-seguir'>
      {enable ? 'No ' : ''}Seguir puntero
    </button>
  </main>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>Activar FollowMouse component</button>
    </main>
  )
}

export default App