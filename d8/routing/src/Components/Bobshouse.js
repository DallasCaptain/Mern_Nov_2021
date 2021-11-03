import React from 'react'
import { useParams } from 'react-router';
import { useHistory} from 'react-router-dom'

const Bobshouse = ()=>{
    const {name} = useParams()
    const history = useHistory();
    const goback = ()=>{
        console.log(history)
        history.goBack()
    }
    return(
        <>
        <h2>{name}S HOUSE</h2>
        <button onClick={goback}>Go Back</button>
        </>
    )

}

export default Bobshouse;