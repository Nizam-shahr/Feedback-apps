import Header from './Components/Header'
import FeedbackLists from './Components/FeedbackLists';
import {FeedbackProvider} from './Contexts/FeedbackContexts'
import FeedbackForms from './Components/FeedbackForms';
import FeedbackStat from './Components/FeedbackStat'


function App() {

   
  return (
   <FeedbackProvider>
   <Header />
   <div className='container'>
   <FeedbackForms/>
    <FeedbackStat/>
    <FeedbackLists />
  
   </div>
   </FeedbackProvider>
  ) 
}

export default App;
