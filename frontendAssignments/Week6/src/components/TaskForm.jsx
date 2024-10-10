import Task from "./Task";
import { useState } from 'react';

export default function TaskForm() {
    const initialTasks = [
        "Task 1", 
        "Task 2", 
        "Task 3"
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [completedTasks, setCompletedTasks] = useState(0);
    const [task, setTask] = useState('');
    const [checkedStates, setCheckedStates] = useState(new Array(initialTasks.length).fill(false)); // Track checked state

    const taskList = tasks.map((taskItem, index) => (
        <div key={index}>
            <Task 
                taskName={taskItem}
                onCheckChange={(isChecked) => handleCheckChange(isChecked, index)} // Pass the index
                onRemove={() => removeTask(index)} // Call removeTask with index
                isChecked={checkedStates[index]} // Pass the checked state
            />
        </div>
    ));

    function handleCheckChange(isChecked, index) {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = isChecked; // Update the checked state for the specific index
        setCheckedStates(newCheckedStates);

        // Increment or decrement completedTasks
        if (isChecked) {
            setCompletedTasks(completedTasks + 1);  // Increment when checked
        } else {
            setCompletedTasks(completedTasks - 1);  // Decrement when unchecked
        }
    }

    function removeTask(index) {
        const isChecked = checkedStates[index]; // Get the current checked state

        // If the checkbox is checked, do nothing
        if (isChecked) {
            return; 
        }

        // If the checkbox is not checked, increment completedTasks by 1
        setCompletedTasks(completedTasks + 1);
    }

    const remainingTasks = tasks.length - completedTasks;

    function handleSubmit(e) {
        e.preventDefault();
        if (task.trim() === "") return;
        setTasks([...tasks, task]);
        setCheckedStates([...checkedStates, false]); // Add a new state for the new task
        setTask('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                style={{
                    display: "flex"
                }}
            >
                <input 
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="new task ..."
                    style={{
                        width: "15rem",
                        height: "2rem"
                    }}
                />
                <button
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        width: "70px"
                    }}
                >Save</button>
            </form>
            <h2>You have {remainingTasks} tasks remaining</h2> 
            <div>
                {taskList}
            </div>
        </>
    );
}