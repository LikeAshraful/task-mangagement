import React, { useEffect, useState } from 'react'
import { Button, Form, ButtonToolbar } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = ({ onSubmit }) => {

    const { taskId } = useParams();
    const navigate = useNavigate();

    const [todoTitle, setTodoTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);


    useEffect(() => {
        const fetchTodo = async () => {
            await fetch(`http://localhost:8000/todos/${taskId}`)
                .then(response => response.json())
                .then(response => {
                    setTodoTitle(response.title);
                    setDescription(response.description);
                    setIsCompleted(response.completed);
                });
        }

        fetchTodo();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: todoTitle,
                description: description,
                completed: isCompleted
            })
        };

        fetch(`http://localhost:8000/todos/${taskId}`, requestOptions).then(async response => {
            const data = await response.json();
            console.log('response is', data);
        });

        navigate('/task')
    };


    return (
        <div>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={todoTitle}
                        onChange={e => setTodoTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={4} value={description}
                        onChange={e => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="is_completed">
                    <Form.Check type="checkbox" label="Completed" checked={isCompleted} onChange={e => setIsCompleted(e.target.checked)} />
                </Form.Group>
                <ButtonToolbar>
                    <Button variant="warning" className='mr-2' onClick={() => navigate(-1)}>
                        Back
                    </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </ ButtonToolbar>
            </Form>

        </div>
    );
}

export default EditTask