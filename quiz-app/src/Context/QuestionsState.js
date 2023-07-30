import React, {useState} from 'react'
import quizContext from "./QuizContext"

export default function QuestionsState(props) {
    const host = "http://localhost:3000"
    const[start,setStart] = useState(false);
    const[quizQuestion,setQuizQuestion] = useState(null);
    const[ind,setInd] = useState(-1);
    const[correct,setCorrect] = useState(0);

    //start the quiz
    const startQues= async(ans)=>{
        const newInd=ind+1;
        setInd(newInd);
        const response = await fetch(`${host}/startquestion`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          });
          const json = await response.json();
          setQuizQuestion(json);
    }

    //next question API handling
    const nextQues= async(option,time)=>{
            const newInd=ind+1;
        setInd(newInd);
        const payload = {
            "option": option,
            "time": time,
            "index": newInd, // current question index
          };
        const response = await fetch(`${host}/nextquestion`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
          const json = await response.json();
          setQuizQuestion(json);
    }

    //end API handling
    const endQuiz = async(option,time)=>{
        const newInd=ind+1;
    setInd(newInd);
    const payload = {
        "option": option,
        "time": time,
        "index": newInd, // current question index
      };
    const response = await fetch(`${host}/endquiz`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await response.json();
      setCorrect(json);
}
    
  return (
    <quizContext.Provider value={{start,setStart,quizQuestion,ind,setInd,nextQues,correct,setCorrect,startQues,endQuiz}}>
        {props.children}
    </quizContext.Provider>
  )
}
