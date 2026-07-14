import { useEffect, useState } from "react";

function Tasks(props){
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
    }, []);
    const taskList=tasks.map(task => <p>{task.title}</p>);
    return(
    <div>
        {taskList}
    </div>
    )
}

export default Tasks