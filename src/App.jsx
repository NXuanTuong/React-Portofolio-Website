import React, { useEffect, useState } from 'react'
import Layouts from './components/Layouts'
import Welcome from './components/Welcome/Welcome'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 4000);
  }, [loading])
  return (
    <>
      { loading ? <Welcome /> : <Layouts />}
      
      {/* <Layouts /> */}
    </>
  )
}

export default App