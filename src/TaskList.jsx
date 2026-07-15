import { useEffect, useState } from "react";

function TaskList(props){
    const [tasks, setTasks]= useState([]);
    useEffect(() =>{
        async function fetchTasks() {
            const response = await fetch('https://task-api-gen5.onrender.com/tasks', {
                headers: {
                    'Authorization': 'Bearer '+ props.token
                }
            });
            const data= await response.json();
            if(response.ok){
                setTasks(data);
            }    
        }
    fetchTasks();  
    }, [props.refreshCount]);
    async function onDelete(id) {
        const response = await fetch(`https://task-api-gen5.onrender.com/tasks/${id}`,{
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer '+ props.token
            }
        });
        if(response.ok){
            props.onPageRefresh();
        }
    }
    async function handleStatusChange(status,id){
        const response = await fetch(`https://task-api-gen5.onrender.com/tasks/${id}`,{
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer '+ props.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({status})
        });
        if(response.ok){
            props.onPageRefresh();
        }
    }
    const taskList=tasks.map(task => 
        <p>
            {task.title}
            <button onClick={()=>onDelete(task.id)}>Delete</button>
            <select value={task.status} onChange={(e)=> handleStatusChange(e.target.value, task.id)}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </p>);
    return(
    <div>
        {taskList}
    </div>
    )
}

export default TaskList