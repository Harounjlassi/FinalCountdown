import { useState, useRef, useEffect } from "react";

export default function Player() {
  const playerName = useRef();

  const [name, setName] = useState(null);
  // const [submit, setSubmit] = useState(false);

  //  useEffect(() => {
  //   console.log("submit changed:", submit);
  // }, [submit]);
  // function handleChange(e) {
  //   setSubmit(false)
  //   setName(e.target.value);


  // }
  function handleClick() {
    //setSubmit(true)
    //console.log(submit)// <-- logs false

    // Why does it log false?
    // setSubmit(true) does not update submit immediately.
    // In React, setState is asynchronous: React schedules a re-render with the new value, but it doesn’t mutate the variable submit right away.
    // So inside the same function call, submit still holds its old value (false).
    // After the function finishes, React will re-run the component, and then submit will be true.



    console.log(playerName.current.type)
    setName(playerName.current.value);
    playerName.current.value='';


  }
  //console.log(submit)// <-- logs true
  //console.log("dddddddddddd")

  return (
    <section id="player">
      {/* <h2>Welcome {playerName ? playerName : 'unknown'} entity</h2> */}
      <h2>Welcome {name ?? 'unknown'} entity</h2>
      <p>
        {/* ref is special prop */}
        {/* <input ref={playerName} type="text" value={name} onchgange /> */}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
