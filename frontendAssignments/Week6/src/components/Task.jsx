export default function Task({
    taskName="Task 1",
    onCheckChange,
    onRemove,
    isChecked // Add this prop to control the checkbox state
}) {

    function handleCheckboxChange(e) {
        const checked = e.target.checked;
        if (onCheckChange) {
            onCheckChange(checked); // Notify parent component of the check change
        }
    }

    return (
        <div
            style={{
                display: "flex",
                width: "35vw",
                height: "4rem",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1rem"
            }}
        >
            <div
                style={{
                    display: "flex"
                }}
            >
                <input 
                    type="checkbox" 
                    checked={isChecked} // Control the checkbox state
                    onChange={handleCheckboxChange} 
                    disabled={isChecked} // Disable checkbox when checked
                />
                <h3
                    style={{
                        marginLeft: "1rem",
                        textDecoration: isChecked ? 'line-through' : 'none'
                    }}
                >{taskName}</h3>
            </div>
            <button
                style={{
                    backgroundColor: "white",
                    border: "1px solid black",
                    width: "5rem",
                    height: "2rem"
                }}
                onClick={onRemove} // Call onRemove to remove task
            >Remove</button>
        </div>
    );
}