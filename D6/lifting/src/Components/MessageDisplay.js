import react, {useState} from 'react'


const MessageDisplay = (props)=>{




    return(
        <ul>
            {props.messages.map((msg)=>{
                return (<li>{msg}</li>)
            }
            )}

        </ul>
    )
}

export default MessageDisplay;