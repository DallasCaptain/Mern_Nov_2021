import react, {useState} from 'react'


const Message = (props)=>{

    const [msg,setMsg] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.onNewMessage(msg)
    }


    return(
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea
                rows = '4'
                cols ="50"
                placeholder='Enter Message Here' 
                onChange={(e)=>setMsg(e.target.value)}
                value={ msg }>
            </textarea>
            <input type='submit' value='Send Message'></input>
        </form>
    )
}


export default Message;