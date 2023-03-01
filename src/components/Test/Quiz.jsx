import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { decode } from 'html-entities'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleScoreChange } from './redux/actions'
import UseAxios from './hooks/UseAxios'

const getRandomInteger = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Quiz = () => {

  const {
    question_categoery,
    question_difficult,
    question_type,
    amount_of_questions,
    score
  } = useSelector(state => state);

  const navigateTo = useNavigate();

  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_questions}`;

  if (question_categoery) {
    apiUrl = apiUrl.concat(`&category=${question_categoery}`);
  }
  if (question_difficult) {
    apiUrl = apiUrl.concat(`&difficult=${question_difficult}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }


  //console.log(question_categoery,question_difficult,question_type,amount_of_questions);
  const { response, loading } = UseAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      // console.log(question);
      let answer = [...question.incorrect_answers]
      // console.log(answer);
      answer.splice(
        getRandomInteger(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answer);
      // // console.log(getRandomInteger(4));
    }
  }, [response, questionIndex])


  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    )
  }
  const handleCorrectAns = (e) => {

    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1)
    } else {
      navigateTo('/result');
    }
    console.log(score);
  }

  return (
    <Box>
      <Typography variant='h4'>Question {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button variant='contained' onClick={handleCorrectAns}>{decode(data)}</Button>
        </Box>
      ))}
      <Box mt={5}>
        Score: {score}/{response.results.length}
      </Box>
    </Box>
  )
}

export default Quiz