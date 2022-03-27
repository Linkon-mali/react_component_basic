import React from 'react';
import { Table } from 'react-bootstrap';
import TaskDetail from './TaskDetail';

const TaskList = (props) => {

  const {tasks, setIsCreateMode, isCreateMode} = props;

  return (
    <div>
      <div style={{marginLeft: '95%'}}>
        <button className='btn btn-success pointer' onClick={() => setIsCreateMode(isCreateMode ? false : true)}><i className='fa fa-plus-circle'></i></button>
      </div>
      <div className="clearfix"></div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task Title</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                tasks.map((item, index) => (
                    <TaskDetail item={item} index={index} />
                ))
              }
              </tbody>
            </Table>
    </div>
  )
}

export default TaskList