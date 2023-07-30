import './App.css';
import Start from './Components/Start';
import Exit from './Components/Exit'
import quizContext from './Context/QuizContext';
import { useContext } from 'react';
import Quiz from './Components/Quiz';
function App() {
  const{start,ind} = useContext(quizContext);
  return (
    <>
      {!start ? <Start/> : (ind<5 ?<Quiz/> : <Exit/>)}

    </>
  );
}

export default App;
