import React,{useContext} from 'react'
import quizContext from '../Context/QuizContext';
import congo from './Congo.jpg'
import popper from './popper.mp4';
export default function Exit() {
    const{correct,setStart,setInd,setCorrect} = useContext(quizContext);
    const onNewquiz=()=>{
        
        setInd(-1);
        setStart(false);
        setCorrect(0);
    }
  return (
    <>
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    }}
  >
    <video autoPlay muted loop style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}>
      <source src={popper} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="center-container">
      <div className="card" style={{ width: "18rem", position: "relative", zIndex: 1 }}>
        <img src={congo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Total Score</h5>
          <p className="card-text">Correct Answers {correct} </p>
          <p className="card-text">Wrong Answers {5 - correct} </p>
          <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
          <button type="button" className="btn btn-success" onClick={onNewquiz}>
            Start Again
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>

  )
}
