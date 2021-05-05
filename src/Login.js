import Header from './Header';
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

function Login(){
    
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login()
    {
        let item = {email, password}
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method:'POST',
            headers:{
                "content-Type":"application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push('/add')
    }
    
    //Redirect if Login
    useEffect( ()=>{
        if(localStorage.getItem('user-info')){
            history.push('./add')
        }
    },[])
    
    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>User login</h1>
                <input type="text" placeholder="email" value={email} onChange={ (e)=> setEmail(e.target.value)} className="form-control"/>
                <br/>
                <input type="password" placeholder="Password" value={password} onChange={ (e)=> setPassword(e.target.value)} className="form-control"/>
                <br/>
                <button className='btn btn-primary' onClick={login}>LogIn</button>
            </div>
        </div>
    )
}

export default Login