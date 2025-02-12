import React from 'react'
import { ServerSideFunction } from '../utils/server-utils'

export default function ServerRoutePage() {
  console.log('server route rendered')
  const result = ServerSideFunction()
  return (
    <div>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
    </div>
  )
}
