import React,{useState,useContext,useEffect} from "react";
import quizContext from "../Context/QuizContext";
import startgif from './start_.gif'
export default function Quiz() {
    const{quizQuestion, nextQues, endQuiz,ind} = useContext(quizContext);
    const[option,setOption] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [timeTaken, setTimeTaken] = useState(0);

    const optionSelected = (e) => {
        setOption(e.target.value);
    }
    const nextQuestion = () => {
        stopTimer();
        if(ind<4){
            nextQues(option,timeTaken);
        }
        else {
            endQuiz(option,timeTaken);
        }
        setOption(null);

    }

    const startTimer = () => {
        setStartTime(Date.now()); // Record the start time when a new question is displayed
      };
    
      const stopTimer = () => {
        if (startTime) {
          const currentTime = Date.now();
          const timeDiff = Math.floor((currentTime - startTime) / 1000); // Calculate time taken in seconds
          setTimeTaken(timeDiff);
          setStartTime(null); // Reset the start time
        }
      };

      useEffect(() => {
        startTimer(); // Start the timer when the component mounts for the first question
        return () => {
          stopTimer(); // Stop the timer when the component is unmounted 
        };
      }, []);
    
  return (
    // !quizQuestion && <Spinner/>
    <>
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img src={startgif} className="card-img-top" alt="..." style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}/>
    {quizQuestion && (<div className="center-container">
      <div class="card" style={{ width: "50%", border: "2px solid black", backgroundColor: "#f0f0f0" }}>
        <div class="container mt-4">
          <div class="mb-4">
          <p class="card-text"><b>Ques.{quizQuestion.id}</b> {quizQuestion.question}</p>
          </div>

          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="radio"
              name="option"
              id="option1"
              value={quizQuestion.options[0]}
              
              onClick={optionSelected}checked={option === quizQuestion.options[0]}
            />
            <label class="form-check-label" for="option1">
            {quizQuestion.options[0]}
            </label>
          </div>

          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="radio"
              name="option"
              id="option2"
              value={quizQuestion.options[1]}
              
              onClick={optionSelected}checked={option === quizQuestion.options[1]}
            />
            <label class="form-check-label" for="option2">
            {quizQuestion.options[1]}
            </label>
          </div>

          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="radio"
              name="option"
              id="option3"
              value={quizQuestion.options[2]}
              
              onClick={optionSelected}checked={option === quizQuestion.options[2]}
            />
            <label class="form-check-label" for="option3">
            {quizQuestion.options[2]}
            </label>
          </div>

          <div class="form-check mb-2">
            <input
              class="form-check-input"
              type="radio"
              name="option"
              id="option4"
              value={quizQuestion.options[3]}
              onClick={optionSelected}
              checked={option === quizQuestion.options[3]}
            />
            <label class="form-check-label" for="option4">
            {quizQuestion.options[3]}
            </label>
          </div>
          {/* next button */}
          <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
          <input type="submit" class="btn btn-success" style={{margin: '8px'}} onClick={nextQuestion} disabled={!option}/></div>
        </div>
      </div>
    </div>)}
    </div>
    </>
  );
}