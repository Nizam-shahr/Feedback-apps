import Card from '../Shared/Card'
import Button from '../Shared/Button'
import { useState, useContext } from 'react'
import FeedbackContexts from '../Contexts/FeedbackContexts'
import RatingSelects from './RatingSelects'
function FeedbackForms () {
const [text, setText] = useState('')
const [rating, setRating] = useState(10)
const [message, setMessage]= useState('')
const [btnDisabled, setBtnDisabled] = useState (true)

const {addFeedback} = useContext(FeedbackContexts)
const handleChange = (e) => {
    if(text === ''){
        setMessage(null)
        setBtnDisabled(true)
    }else if(text !== '' && text.trim().length <= 10 ){
        setBtnDisabled(true)
        setMessage('Text must be morethan 10 characters')
    }else {
        setMessage(null)
        setBtnDisabled(false)
    }
    setText(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
        const newFeedback = {
            text,
            rating
        }
        console.log(newFeedback)
        addFeedback(newFeedback)
        setText('')
    }
}

    return (
        <Card> 
            <form onSubmit={handleSubmit}>
            <h2>How would youn rate your service with us? </h2>
            <RatingSelects select ={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" placeholder='write your review' onChange={handleChange} value={text} />
                <Button isDisabled={btnDisabled} type="submit">Send</Button>
                </div>
            </form>
            {message && <div className='message'>{message}</div> }
        </Card>
    )
}
export default FeedbackForms