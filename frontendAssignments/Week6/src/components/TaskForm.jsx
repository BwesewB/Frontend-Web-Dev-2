import Task from "./Task"
import { useState } from 'react'

export default function TaskForm() {

    const initialTasks = [
        "Task 1", 
        "Task 2", 
        "Task 3"
    ]

    const [tasks, setTasks] = useState(initialTasks)

    const [task, setTask] = useState('')

    const taskList = tasks.map((taskItem, index) => (
        <div key={index}>
            <Task 
                taskName={taskItem}
                onRemove={() => removeTask(index)}
            />
        </div>
    ))

    function handleSubmit(e) {
        e.preventDefault();
        if (task.trim() === "") return;
        setTasks([...tasks, task])
        setTask('')
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    return(
        <>
            <form onSubmit={handleSubmit}
                style={{
                    display:"flex"
                }}
            >
                <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="new task ..."
                style={{
                    width:"15rem",
                    height:"2rem"
                }}
                />
                <button
                    style={{
                        backgroundColor:"green",
                        color:"white",
                        border:"none",
                        width:"70px"
                    }}
                >Save</button>
            </form>
            <h2>You have {tasks.length} tasks remaining</h2> 
            <div>
                {taskList}
            </div>

        </>
    )
}