import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskCreate = (props) => {
    const {title, setTitle, priority, setPriority, createTask} = props;
  return (
    <div>
        <Form onSubmit={(e) => createTask(e)}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="priority">
                <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)} aria-label="Default select example">
                <option>Select task priority</option>
                <option value="low">Low</option>
                <option value="mediam">Mediam</option>
                <option value="heigh">High</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default TaskCreate