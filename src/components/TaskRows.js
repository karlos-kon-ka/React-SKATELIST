import React from "react"

export const TaskRows = ({task, toggleTask}) => {
    return (
        <tr >
              
           
      <td className="d-flex justify-content-center" >
        {task.name}
        <input className="form-check-input   m-1  "  type="checkbox" checked={task.done} onChange={() => toggleTask(task) } ></input>
      </td>
      </tr>
    );
}