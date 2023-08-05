import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Tasks = ({ data }) => {

    const navigate = useNavigate();

    const handleDelete = (id) => (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`http://localhost:8000/todos/${id}`, requestOptions).then(async response => {
            const data = await response.json();
            console.log('response is', data);
        });
        window.location.reload(true);
    };

    return (
        data.map((task, index) => (
            <div className="card-body">
                <div className="card" key={index}>
                    <div className="card-header d-flex justify-content-between">
                        <h3>
                            #{index + 1} {task.title}
                            {task.completed ? <span className='m-2 badge badge-sm bg-success'>Done</span> : <span className='m-2 badge badge-sm bg-warning'>Pending</span>}
                        </h3>

                        <div className="text-end">
                            <Link to={`/task/edit/${task._id}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                            <Link onClick={handleDelete(task._id)} className="btn btn-sm btn-danger">Delete</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{task.description}</p>
                    </div>
                </div>
            </div>
        ))
    )
}
export default Tasks;