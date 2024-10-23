import Task from "./Task";
import { useState } from 'react';
import Filter from './Filter';

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
    const [filter, setFilter] = useState('all');

    // Add the task index to the filtered tasks to retain the index reference
    const filteredTasks = tasks.map((taskItem, index) => ({ taskItem, index })).filter(({ index }) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return checkedStates[index];  // Show only completed tasks
        if (filter === 'pending') return !checkedStates[index];   // Show only pending tasks
        return true;
    });

    // Use original task index (taskData.index) to handle check change correctly
    const taskList = filteredTasks.map(({ taskItem, index }) => (
        <div key={index}>
            <Task 
                taskName={taskItem}
                onCheckChange={(isChecked) => handleCheckChange(isChecked, index)} // Pass the original index
                onRemove={() => removeTask(index)} // Call removeTask with the original index
                isChecked={checkedStates[index]} // Pass the checked state
            />
        </div>
    ));

    function handleCheckChange(isChecked, index) {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = isChecked; // Update the checked state for the specific index
        setCheckedStates(newCheckedStates);

        // Increment or decrement completedTasks count
        if (isChecked) {
            setCompletedTasks(completedTasks + 1);  // Increment when checked
        } else {
            setCompletedTasks(completedTasks - 1);  // Decrement when unchecked
        }
    }

    function removeTask(index) {
        // Remove the task from tasks and checkedStates
        const updatedTasks = tasks.filter((_, i) => i !== index);
        const updatedCheckedStates = checkedStates.filter((_, i) => i !== index);

        setTasks(updatedTasks);
        setCheckedStates(updatedCheckedStates);
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
            
            {/* Pass setFilter to Filter */}
            <Filter setFilter={setFilter} />
            
            <h2>You have {remainingTasks} tasks remaining</h2> 
            <div>
                {taskList}
            </div>
        </>
    );
}