import React, {useEffect, useState} from'react'
import axios from'axios'

export default (props)=>{
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('')

    const [fnameError,setFnameError] = useState('')

    useEffect(()=>{
        if(props.obj){
        setFname(props.obj.fname)
        setLname(props.obj.lname)
    }},[])
    
    const handleFname =( e )=>{
        setFname(e.target.value)
        if(e.target.value.length >= 2){
            setFnameError('')
        }else{
            setFnameError('First Name is too short')
        }
    }

    const onSubmitHandler = e =>{
        e.preventDefault()
       
        if(props.obj && props.obj._id){
            axios.put('http://localhost:8000/api/persons/'+props.obj._id,{
            fname,lname
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        }else{
            axios.post('http://localhost:8000/api/persons',{
                fname,lname
            })
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})

        }
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <input type='text' onChange={(e)=>{handleFname(e)}} value={fname} />
            <p>{fnameError}</p>
            <input type='text' onChange={(e)=>{setLname(e.target.value)}} value={lname} />
            <input type='submit' value='Add Person'/>
        </form>
    )
}