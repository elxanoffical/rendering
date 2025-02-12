import { ServerSideFunction } from '../utils/server-utils'
import ImageSlider from '../components/imageSlider'

export default function ServerRoutePage() {
  console.log('server route rendered')
  const result = ServerSideFunction()
  return (
    <div> 
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      <ImageSlider/>
    </div>
  )
}
