import { useRef, useState } from "react"
import ResultModel from './ResultModel.jsx'
import { createPortal } from 'react-dom';

//let timer;
export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
    
    const timer = useRef();
    const dialog = useRef();
    //useRef() to mange any kind of value
    function handleStart() {
        
        //setInterval we be exucute everytime the time expired
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
            console.log(timeRemaining);

        }, 10)


    }
    if (timeRemaining <= 0) {

        clearInterval(timer.current);
        dialog.current.open();
    }
    function handleRest() {
        setTimeRemaining(targetTime * 1000);

    }

    function handleStop() {
        //btnStop.handleStart.
        dialog.current.open();
        clearInterval(timer.current);



    }
    return (
        <>
            <ResultModel ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining}
                onRest={handleRest}
                result="lost" />
            <section className="challenge">
                <h2>{title}</h2>


                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}

                </p>



                <p>
                    <button onClick={timeIsActive ? handleStop : handleStart}>
                        {timeIsActive ? 'stop' : 'start'} Challenge
                    </button>
                </p>
                <p className={timeIsActive ? 'active' : undefined}>
                    {timeIsActive ? 'Time is running' : 'Time inactive'}
                </p>
            </section>
        </>
    )

}