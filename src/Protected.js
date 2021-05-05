import Header from './Header';
import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'

function Protected(props){
    
    let Cmp = props.Cmp
    const history = useHistory()
    
    //Redirect if Login
    useEffect( ()=>{
        if(!localStorage.getItem('user-info')){
            history.push('./register')
        }
    },[])
    
    return(
        <div>
           <Cmp />
        </div>
    )
}

export default Protected