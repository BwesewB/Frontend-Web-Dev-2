import './App.css'

export default function Filter({ setFilter }) {
    return (
        <>
            <div>
                <button onClick={() => setFilter('all')} className="buttonFilter">All</button>
                <button onClick={() => setFilter('completed')} className="buttonFilter">Completed</button>
                <button onClick={() => setFilter('pending')} className="buttonFilter">Pending</button>
            </div>
        </>
    )
}