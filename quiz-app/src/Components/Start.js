import React,{useContext} from 'react'
import '../App.css';
import quizContext from '../Context/QuizContext';
import startgif from './start_.gif'
import upraised from './upraised.png'


export default function Start() {
    const{setStart,startQues} = useContext(quizContext);
    const onStart = () =>{
        setStart(true);
        startQues();
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
      <img src={startgif} className="card-img-top" alt="..." style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}/>
      
      <div className="center-container">
        <div className="card" style={{ width: "18rem", position: "relative", zIndex: 1 }}>
          <img src={upraised} className="card-img-top" alt="..." />
          <div className="card-body">
            <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
            <button type="button" className="btn btn-success" onClick={onStart}>
              Start Quiz
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  )
}

