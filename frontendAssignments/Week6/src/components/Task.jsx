import { useState } from 'react'

export default function Task({
    taskName="Task 1",
    onCheckChange,
    onRemove
}) {

    const [isChecked, setIsChecked] = useState(false)
    const[isDisplayed, setIsDisplayed] = useState(true)

    function handleCheckboxChange(e) {
        const checked = e.target.checked; // Extract the 'checked' value from the event
        setIsChecked(checked); // Update local state
        if (onCheckChange) {
            onCheckChange(checked);
        }
    }

    function handleVisible() {
        setIsDisplayed(prevState => !prevState)
        // Call onRemove when the task is removed
        if (onRemove) {
            onRemove(); // Notify parent component to remove the task
        }
    }

    return(
        <>
            {isDisplayed && (
                <div
                    style={{
                        display:"flex",
                        width:"35vw",
                        // border:"1px solid black",
                        height:"4rem",
                        alignItems:"center",
                        justifyContent:"space-between",
                        paddingBottom:"1rem"
                    }}
                >
                    <div
                        style={{
                            display:"flex"
                        }}
                    >
                        <input 
                            type="checkbox" 
                            check={isChecked}
                            onChange={handleCheckboxChange} 
                        />
                        <h3
                            style={{
                                marginLeft:"1rem",
                                textDecoration: isChecked ? 'line-through' : 'none'
                            }}
                        >{taskName}</h3>
                    </div>
                    <button
                        style={{
                            backgroundColor:"white",
                            border:"1px solid black",
                            width:"5rem",
                            height:"2rem"
                        }}
                        onClick={handleVisible}
                    >Remove</button>
                </div>
            )}
        </>
    )
}