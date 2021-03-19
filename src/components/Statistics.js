import React from 'react'

export default function Statisctics(props) {
    const {points, time, passed} = props

    const restart =()=>{
        window.location.reload();
        return false;
    }

    return (
        <div>
            <div> 
                <h1> your goal is {points} {passed}</h1>
                <h3> your time is {Math.round(time / 60) + ' min ' + time % 60 + ' sec'}</h3>
            </div>
            <button onClick={restart}>Restart</button>
        </div>
    )
}