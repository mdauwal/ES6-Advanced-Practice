import React, {useEffect, useState} from 'react'



const Test = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState(" ");


    useEffect(() => {
        if(count < 0 || count > 5) {
            setMessage('click exceeded')
        } else {
            setMessage('')
        }
        console.log(`Count: ${count}`)
    }, [count]);


  return (
    <div className="container">
        {message && <p>{message}</p> }
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
  </div>
  )
}

export default Test