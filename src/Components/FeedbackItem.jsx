import Card from "../Shared/Card.jsx"
import {FaEdit, FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from "../Contexts/FeedbackContexts.js"

function FeedbackItem ({item}) {
const {deleteFeedback} = useContext(FeedbackContext)

    return (
      <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=> deleteFeedback (item.id)} ><FaTimes color="purple"/></button>
      <button className="edit"><FaEdit/></button>
      <div className="text-display">{item.text}</div>
      </Card>  
    )
}
FeedbackItem.propTypes ={
  items: PropTypes.object.isRequired
}
export default FeedbackItem