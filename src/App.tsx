import React from 'react'
import { Button } from '@/components/ui/button'

function App() {

  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen bg-blue-500'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-bold'>Kikimora</h1>
        </div>
        <div className='flex justify-center items-center'>
          <Button>Click me</Button>
        </div>
      </div>
    </>
  )
}

export default App
