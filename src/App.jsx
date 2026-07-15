import TaskList from './TaskList'
import Login from './Login'
import CreateTask from './CreateTask'
import { useState } from 'react'

function App() {
    const [token, setToken] = useState('');
    const [refreshCount, setRefreshCount]= useState(0);

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
            ) : 
            <Login onLogin={handleLogin} />}
        </div>
    )
}

export default App