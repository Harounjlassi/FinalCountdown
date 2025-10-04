//in older react version we use forwardRef instead of ref as a prop:ResultModel({ref, result, targetTime })
import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";
const ResultModel = forwardRef(function ResultModel({ targetTime, timeRemaining, onRest }, ref) {
    const dialog = useRef();
    const userLost = timeRemaining <= 0;

    const formatedRemainingTime = (timeRemaining / 1000).toFixed(2);
    console.log(formatedRemainingTime);

    const score = Math.round((1 - (timeRemaining ??0) / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }

        };
    });
    return (createPortal(

        <dialog ref={dialog} className="result-modal" >
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>You Score:{score}</h2>}
            <p>the target time was <strong> {targetTime} seconds.</strong></p>
            <p>You stopped the timer with {formatedRemainingTime} seconds left.</p>
            <form method="dialog" onSubmit={onRest}>
                <button>Close</button>
            </form>
        </dialog>, document.getElementById('modal'
        )))
});
export default ResultModel;