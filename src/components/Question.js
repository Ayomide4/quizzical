import React, { useEffect } from "react";

import "../App.css"

/*
    
    We need to create a question component that displays:
        
    
    Todo
        - display Question (done)
        - display Answer Choices (done)
        - randomize answers (done)
        - select answer
            - when an answer is clicked, highlight the answer
            - update state to selected

        - logic that detects the correct answer
        - fix css

    


*/

export default function Question({handleClick, questions, count, isSelected, setIsSelected, answerArray}){

    useEffect(() => {
        for(let i = 0; i<4; i++){
            answerArray[i].sort((a,b) => 0.5 - Math.random())
        }
    })

    

    return (
    <div className="question-container">
        <h3 className="question" >{questions[count].question}</h3>
        <div className="quiz-btns">
            <button onClick={() => handleClick(count)} className="quiz-btn answer-one"  >{answerArray[count][0]}</button>
            <button onClick={() => handleClick(count)} className="quiz-btn answer-two"  >{answerArray[count][1]}</button>
            <button onClick={() => handleClick(count)} className="quiz-btn answer-three"  >{answerArray[count][2]}</button>
            <button onClick={() => handleClick(count)} className="quiz-btn answer-four" >{answerArray[count][3]}</button>
        </div>
        <hr></hr>
    </div>
    )
    
    
}