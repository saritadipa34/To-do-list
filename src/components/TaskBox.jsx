import Task from "./Task" 

const TaskBox=({tasks,task,handleDelete,handleEdit})=>{
    return(
        <>
        <div className="flex justify-between">
<span>No</span> <span>To-do item</span> <span>Actions</span>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
{
    tasks.map((task,i)=>{
        return <Task key={i} handleDelete={()=>handleDelete(i)} handleEdit={()=>handleEdit(i)}  task={task} />
    })
}
</div>
      
        </>
    )
}
export default TaskBox;