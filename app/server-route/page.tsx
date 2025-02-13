import { ServerSideFunction } from '../utils/server-utils'
import ImageSlider from '../components/imageSlider'
import { ClientSideFunction } from '../utils/client-utils'

export default function ServerRoutePage() {
  console.log('server route rendered')
  const result = ServerSideFunction()
  const ClientResult = ClientSideFunction()
  return (
    <div> 
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      <ImageSlider/>
    </div>
  )
}
