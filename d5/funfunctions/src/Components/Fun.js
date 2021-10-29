import React,{useState} from 'react'

const Fun = (props)=>{

    const [state,setState] = useState({
        funWord: 'B-A-N-A-N-A-S'
    })

    const [otherstate,setotherstate] = useState({
        alsoState:'SOmething'
    })

    return(
        <div>
            <h1>This is fun!</h1>
            <h3>This is my props {props.funprop}</h3>
            <h3>This is my state {state.funWord}</h3>
            <h3>This is my otherstate {otherstate.alsoState}</h3>
        </div>
    )
}

export default Fun;