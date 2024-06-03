import React from 'react';
import { TaskRows } from './TaskRows';


export const Tasktable = ({ tasks, toggleTask, showCompleted = false }) => {
  
  const taskTableRrows = ( doneValue) => {
    return (
        tasks
        .filter(task => task.done === doneValue)
        .map(task => (
            <TaskRows task={task} key={task.name}  toggleTask={toggleTask} />
        ) )
        
    )
  }
    return (
    <div>
      <table id='tabla' className='table table-dark table-border table-striped border-secondary'>
        <thead >
          <tr >
            <th >TRICKs </th>
          </tr>
        </thead>
        <tbody>
          {taskTableRrows(showCompleted)}
        </tbody>
      </table>
    </div>
  );
};

export default Tasktable;
