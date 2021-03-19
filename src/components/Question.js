import React, { useEffect, useState } from 'react'
import Statisctics from './Statisctics'
import dataQ from './data/dataQ.json'
import dataA from './data/dataA.json'
import './styles/styles.css'

export default function Question(props) {

    const [questionIndex, setQuestionIndex] = useState(0)
    const [answerIndex, setAnswerIndex] = useState(0)
    const [showStatistics, setShowStatistics] = useState(false)
    const [points, setPoints] = useState(0)
    const [time, setTime] = useState(0)
    const [timeHandler, setTimeHandler] = useState(null)
    const [passed, setPassed] = useState(null)

    useEffect(()=>{
        setTimeHandler(() => setInterval(() => setTime(prev => prev + 1), 1000) ) 
    },[])

    const handler =(variant)=>{
        if(variant.isRight){
            setPoints(prev => prev + 1)
        }
        if(questionIndex + 1 == dataQ.length){
            isPassed()
            setShowStatistics(prev => !prev)
            clearInterval(timeHandler)
        }else {
         setQuestionIndex(prev => prev + 1)
        setAnswerIndex(prev => prev + 1)
        }
    }

    const isPassed=()=>{
        if(points <= 2){
            return setPassed(' unfortunatelly, you have not passed')
        }else{
            return setPassed(' congratulations, you have passed')
        }
    }

    const questionElems = dataQ.map((question, index) =>{
        return <li key={index}><h1>#{index + 1}</h1>{question.title} </li>
    })

    const answersElems = dataA.map((answer, index)=> {
    return <li key={index} >{answer.map((variant, index) =>{
        return <p key={index} onClick={() => handler(variant)}> {variant.body}</p>
    }) }</li> 
})

    return(
        <>
        {showStatistics ? 
        <>
        <Statisctics passed={passed} points={points} time={time}/>
        </> :
        <div>
            <ul>
                {questionElems[questionIndex]}
                <ul>
                    {answersElems[answerIndex]}
                </ul>
            </ul>
        </div> }
        </>
    )
}