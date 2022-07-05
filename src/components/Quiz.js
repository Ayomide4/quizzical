import React, {useState, useEffect} from "react";
import "./Question"
import "../App.css"
import Question from "./Question";

/*
    TODO:
        - menu to quiz loading screen (done)
        - make sure quiz btn loads wtith the rest (done)

        BUG:
            Changing state rerenders a component. But I need to change state to update if the button is click. 
            This means I need to stop the quiz from rerendering and the button
            1. Upon first render, set the questions so they arent set every time its rerendered


*/


export default function Quiz(){

    //we use useState to store the data we get from the api
    const apiUrl = "https://opentdb.com/api.php?amount=5&type=multiple"
    const [questions, setQuestions] = useState([]);
    const [isSelected, setIsSelected] = useState(false);



    //use effect fetches our data from the api and does it every time the quiz component is rendered
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.results)
                console.log(data)
            })
            console.log("rendered")
        
    }, [])

    function handleClick(count){
        console.log(count)

        }
        //console.log(questions)
    

    console.log("questions",questions)

    //creates puts together an array of wrong and the correct answer
    if(questions.length > 0){
        const answerArray = [
            [...questions[0].incorrect_answers, questions[0].correct_answer], 
            [...questions[1].incorrect_answers, questions[1].correct_answer], 
            [...questions[2].incorrect_answers, questions[2].correct_answer], 
            [...questions[3].incorrect_answers, questions[3].correct_answer], 
            [...questions[4].incorrect_answers, questions[4].correct_answer], ]        

        let count = 0;
        const questionElements = questions.map(question => 
            (
                <Question 
                    key={count}
                    id={question}
                    questions={questions} 
                    isSelected={isSelected} 
                    setIsSelected={setIsSelected} 
                    answerArray={answerArray} 
                    count={count++}
                    handleClick={handleClick}
                />
            ))

        

        return (
            <div className="quiz-container">
                <div className="blob-3"></div>
                <div className="blob-4"></div>
                {questionElements}
                {/* <Question  questions={questions} count={0} isSelected={isSelected} setIsSelected={setIsSelected} answerArray={answerArray}/>
                <Question questions={questions} count={1} isSelected={isSelected} setIsSelected={setIsSelected} answerArray={answerArray}/>
                <Question questions={questions} count={2} isSelected={isSelected} setIsSelected={setIsSelected} answerArray={answerArray}/>
                <Question questions={questions} count={3} isSelected={isSelected} setIsSelected={setIsSelected} answerArray={answerArray}/>
                <Question questions={questions} count={4} isSelected={isSelected} setIsSelected={setIsSelected} answerArray={answerArray}/> */}

                <button className="submit-quiz-btn">Check Answers</button>
            </div>
        )
    }
    else {
        return <div></div>
    }
}