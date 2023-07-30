// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
// Static data - Mock MCQs
const mockMCQs = [
    {
      "id": 1,
      "question": "What is the capital of France?",
      "options": ["Paris", "London", "Berlin", "Madrid"],
      "answer": "Paris"
    },
    {
      "id": 2,
      "question": "Which planet is known as the Red Planet?",
      "options": ["Mars", "Venus", "Jupiter", "Saturn"],
      "answer": "Mars"
    },
    {
      "id": 3,
      "question": "What is the largest mammal in the world?",
      "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      "answer": "Blue Whale"
    },
    {
      "id": 4,
      "question": "Which famous scientist developed the theory of general relativity?",
      "options": ["Isaac Newton", "Albert Einstein", "Marie Curie", "Galileo Galilei"],
      "answer": "Albert Einstein"
    },
    {
      "id": 5,
      "question": "Which country is home to the famous landmark, the Great Wall?",
      "options": ["China", "India", "Egypt", "Italy"],
      "answer": "China"
    }
  ]

    let userResponses = [];
    let timeTaken = [];

  app.get('/startquestion', (req, res) => {
    const nextQuestion = mockMCQs[0];
    res.json(nextQuestion);
  });
  

// Endpoint to get the next question based on index
app.post('/nextquestion', (req, res) => {
const {index,option, time } = req.body;
  userResponses.push(option);
  timeTaken.push(time);
  // Get the next question index
  const nextIndex = parseInt(index) + 1;
    // Return the next question
    const nextQuestion = mockMCQs[index];
    res.json(nextQuestion);
});

app.post('/endquiz', (req, res) => {
    const {index,option, time } = req.body;
      userResponses.push(option);
      timeTaken.push(time);
      // Get the next question index
      const correct = checkAnswers();
      userResponses = [];
      timeTaken = [];
        res.json(correct);
    });

    checkAnswers=()=>{
        let ans =0;
        for(let i=0;i<mockMCQs.length;i++){
            ans += userResponses[i] === mockMCQs[i].answer ? 1:0;
            console.log(userResponses[i] + " " + mockMCQs[i].answer)
        }
        return ans;
    }


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
