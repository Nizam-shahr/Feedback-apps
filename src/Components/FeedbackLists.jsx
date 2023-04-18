import {useContext} from 'react'
import FeedbackContexts from '../Contexts/FeedbackContexts'
import FeedbackItem from './FeedbackItem'

function FeedbackLists() {
    const {feedback} = useContext(FeedbackContexts)
    if(!feedback || feedback.length === 0 ) {
return <h1>No feedback yet</h1>

    }
  return (
   <div className="feedback-list">
     {feedback.map((item) => (
        <FeedbackItem key = {item.id} item = {item} />
    ))} 
    
    </div>)
  
}

export default FeedbackLists
