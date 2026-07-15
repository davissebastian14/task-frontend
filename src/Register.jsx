import { useState } from "react";

function Register(props) {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [registered, setRegistered]= useState(false)
    async function onRegister(){
        const response= await fetch('https://task-api-gen5.onrender.com/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        if(response.ok){           
            setRegistered(true);
        }
    }
    return(
        <div>
            {registered && (
                <>
                    <p>Registration successful!</p>
                    <button onClick={()=>props.onShowLogin()}>Go to Login</button>
                </>        
            )}
            <input
                value={name}
                onChange={(n)=> setName(n.target.value)}
            />
            <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(p)=> setPassword(p.target.value)}
            />
            <button onClick={()=> onRegister()}>Register</button>
        </div>
    )
}

export default Register;