import { useState } from "react"

function Login(props){
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    async function login() {
        const response= await fetch('https://task-api-gen5.onrender.com/auth/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password})
        })
        const data= await response.json();
        const token= data.token;
        if(token){
            props.onLogin(token);
        }
    }
    return(
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={(p) => setPassword(p.target.value)}
            />
            <button onClick={()=>login()}>Login</button>
        </div>
    )
}

export default Login