import React, { useEffect, useState } from 'react'
import Pagination from "./components/pagination";
import Tasks from "./components/tasks/tasks";

import { Button, Form, ButtonToolbar, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const TaskList = () => {

    const [state, setState] = useState({
        tasks: [],
    });

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const [todoTitle, setTodoTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        const url = "http://localhost:8000/todos";
        fetch(url).then(response => response.json())
            .then(json => setState({
                tasks: json
            }))
    }

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = state.tasks.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(state.tasks.length / recordsPerPage)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: todoTitle,
                description: description,
                completed: isCompleted
            })
        };

        fetch(`http://localhost:8000/todos`, requestOptions).then(async response => {
            const data = await response.json();
            console.log('response is', data);
        });

        window.location.reload(true);

    };

    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Tasks List</h1>
            </div>

            <div className="card">
                <div className="card-header">
                    <div className="text-end">
                        <Button variant="primary" onClick={handleShow}>
                            Add New Task
                        </Button>
                    </div>
                </div>

                <Tasks
                    data={currentRecords}
                />

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title"
                                    onChange={e => setTodoTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={4}
                                    onChange={e => setDescription(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="is_completed">
                                <Form.Check type="checkbox" label="Completed" onChange={e => setIsCompleted(e.target.checked)} />
                            </Form.Group>
                            <ButtonToolbar>
                                <Button variant="secondary" className='mr-2' onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </ ButtonToolbar>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>

            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default TaskList