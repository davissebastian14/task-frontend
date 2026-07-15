import { useState } from "react";

function CreateTask(props){
    const [title, setTitle]= useState("");
    async function submit() {
        const response= await fetch('https://task-api-gen5.onrender.com/tasks',{
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '+ props.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        });
        if(response.ok){
            props.onTaskCreated();
            setTitle("");
        }

    }
    return(
        <div>
            <input
                value={title}
                onChange={(t)=> setTitle(t.target.value)}
            />
            <button onClick={()=>submit()}>Create Task</button>
        </div>
    )
}

export default CreateTask;