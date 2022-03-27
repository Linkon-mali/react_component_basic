import React from 'react'

const TaskDetail = (props) => {
    
    const {item, index} = props;

  return (
    <tr key={index}>
        <td>{index+1}</td>
        <td>{item.Title}</td>
        <td>{item.priority}</td>
        <td>
        <button className='btn btn-success pointer'><i className='fa fa-pencil'></i></button>
        <button className='btn btn-danger pointer'><i className='fa fa-trash' title='Delete'></i></button>
        </td>
    </tr>
  )
}

export default TaskDetail