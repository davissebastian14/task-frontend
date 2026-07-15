import TaskList from './TaskList'
import Login from './Login'
import CreateTask from './CreateTask'
import Register from './Register'
import { useState } from 'react'

function App() {
    const [token, setToken] = useState('');
    const [refreshCount, setRefreshCount]= useState(0);
    const [showRegister, setShowRegister]= useState(false);

    function handleLogin(token){
        setToken(token);
    }

    return(
        <div>
            {token ? (
            <>
                <CreateTask token={token} onTaskCreated={() => setRefreshCount(r => r+1)} />
                <TaskList token={token} refreshCount={refreshCount} onPageRefresh={()=> setRefreshCount(r=>r+1)} />
            </> 
            ) : (showRegister ?
                    <Register onShowLogin={()=> setShowRegister(false)} /> :
                    <Login onLogin={handleLogin} onShowRegister={()=> setShowRegister(true)} />
                )
            }
        </div>
    )
}

export default App