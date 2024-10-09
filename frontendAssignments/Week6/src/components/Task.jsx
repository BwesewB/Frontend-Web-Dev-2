export default function Task({
    taskName="Task 1",
    onRemove
}) {

    return(
        <>
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
                    <input type="checkbox" />
                    <h3
                        style={{
                            marginLeft:"1rem"
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
                    onClick={onRemove}
                >Remove</button>
            </div>
        </>
    )
}