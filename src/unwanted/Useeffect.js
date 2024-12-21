import React,{useEffect, useState} from 'react'

export const Useeffect = () => {

    const [count, setCount] = useState(0);

   useEffect(() =>{
    document.title=`you clicked ${count} times`;
   },[count])

  return (
    <div>
        <p>{count}</p>
<button onClick={() => {setCount(count + 1)}}>GetCount</button>
    </div>
  )
}
