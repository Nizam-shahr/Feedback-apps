import {useState, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import FeedbackData from '../Components/data/FeedbackData'
const FeedbackContexts = createContext() 
export const FeedbackProvider = ({children}) => {


    const [feedback, setFeedback] = useState (FeedbackData)
    
    
    const addFeedback = (newFeedback)=> {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    const deleteFeedback = (id)=> {
      if(window.confirm('Are you sure you to delete')){
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    }
  return <FeedbackContexts.Provider value= {{
    feedback, 
    addFeedback,
    deleteFeedback
  }}>
    {children}
   </FeedbackContexts.Provider>
  

}
export default FeedbackContexts
