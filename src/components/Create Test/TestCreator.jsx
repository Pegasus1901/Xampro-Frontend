import { Card, Paper } from "@mui/material";
import React, { useState } from "react";
import Left from "../Dashboard/Left";
import './testcreator.css'

const TestCreator = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleOptionChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ question, options, answer });
    // do something with the submitted question, options, and answer
    setQuestion("");
    setOptions(["", "", "", ""]);
    setAnswer("");
  };

  return (
    <>
      <Left />



      <Card className="card" sx={{ width: 600 }}>

        <form onSubmit={handleSubmit}>
          <label id="questionlabel">
            Question:
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
          </label>
          {options.map((option, index) => (
            <div className="options" key={index}>
              <label >
                Option {index + 1}:
                <input
                  type="text"
                  value={option}
                  onChange={(event) => handleOptionChange(event, index)}
                />
              </label>
              <button type="button" onClick={() => handleRemoveOption(index)}>
                Remove Option
              </button>
            </div>
          ))}
          <button type="addbutton" onClick={handleAddOption}>
            Add Option
          </button>
          <label>
            Answer:
            <select value={answer} onChange={(event) => setAnswer(event.target.value)}>
              <option value="">Select an answer</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </Card>
    </>
  );
};

export default TestCreator;
