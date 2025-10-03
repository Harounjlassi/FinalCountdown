import { useRef, useState } from "react"
import ResultModel from './ResultModel.jsx'

//let timer;
export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef()
    //useRef() to mange any kind of value
    function handleStart() {

        timer.current = setTimeout(() => {
            setTimerExpired(true)
        }
            , targetTime * 1000)

        setTimerStarted(true)
    }

    function handleStop() {
        //btnStop.handleStart.
        clearTimeout(timer.current);
        setTimerStarted(false)



    }
    return (
        <>
            {timerExpired && <ResultModel targetTime={targetTime} result="lost" />
            }        <section className="challenge">
                <h2>{title}</h2>


                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}

                </p>



                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'stop' : 'start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running' : 'Time inactive'}
                </p>
            </section>
        </>
    )

}