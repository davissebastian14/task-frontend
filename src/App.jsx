import Tasks from './TaskList'
import Login from './Login'
import { useState } from 'react'

function App() {
    const [token, setToken] = useState('');

    function handleLogin(token){
        setToken(token);
    }

    return(
        <div>
            {token ? <Tasks token={token} /> : <Login onLogin={handleLogin} />}
        </div>
    )
}

export default App