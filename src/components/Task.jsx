
import Button from "./Button"

const Task = ({task,handleDelete,handleEdit}) => {
  
  return (
    <div className="flex border  justify-between w-full bg-red-200">
<p className="w-full px-4 py-1 outline-0 truncate"> {task}
  </p>
<div className="flex gap-2 pt-1">
<Button className="bg-blue-500 inline-block"  onClick={handleEdit} text="edit"/>
<Button className="bg-red-500 w-12" onClick={handleDelete} text="delete"/>
</div>
</div>
  )
}

export default Task;
