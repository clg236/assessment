import {useState} from 'react'
import Results from './Results' 

function Question(props) {

    // we have some new state (remember, try and hold state in the component that needs to 'render something')
    const [submitted, setSubmitted] = useState(false);
    const [resources, setResources] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
  
    // here is our function that will handle the button click
    // we want to know the 'answer' they clicked
    function handleButtonClick(event) {
        let resource = event.target.value;

        // store that answer
        setResources(resources => [...resources, resource])

        // go to the next question only if we should
        if (currentQuestion >= 1) {
            setSubmitted(true)

        } else {
            setSubmitted(false)
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    if(submitted) {
        return (
           <Results resources={resources} />
        )
    }

    if(!submitted) {
        return (
            <div>
              <div>
                  <h2>{props.questions[currentQuestion].title}</h2>
                  <button value={props.questions[currentQuestion].answers[0].resourceURL} onClick={handleButtonClick}>{props.questions[currentQuestion].answers[0].answer}</button>
                  <button value={props.questions[currentQuestion].answers[1].resourceURL} onClick={handleButtonClick}>{props.questions[currentQuestion].answers[1].answer}</button>
              </div> 
            </div>
          )
    }
  }

export default Question;