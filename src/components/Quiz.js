import React,{useState, useCallback} from 'react'
import Question from './Question'
import './styles.css'

export default function Quiz() {

    const [isStarted, setIsStarted] = useState(false)
    const startQuiz = useCallback(()=>()=>{
        setIsStarted(prev => !prev)
    })

    const quiz = ()=>{
        if(isStarted){
            return <Question/>
        }
    }

    return (
        <div>
            <button className={isStarted ? 'hide' : 'show'} onClick={startQuiz}>Start</button>
            {quiz()}
        </div>
    )
}