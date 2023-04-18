import {Link} from 'react-router-dom'
import Card from '../Shared/Card'
function AboutPage() {
  return (
   <Card>
    <h1>About this project</h1>
    <p>this is a react project to leave feedback for a product or service 
    </p>
   <p>Version:  10.0</p> 
     <Link to="/"><h2>Back to home page</h2></Link>

   </Card>
  )
}

export default AboutPage
