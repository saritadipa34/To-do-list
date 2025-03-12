import { useState } from "react";
import InputBox from "./components/InputBox";
import Navbar from "./components/Navbar"
import TaskBox from "./components/TaskBox";

const App=()=>{
const[tasks,setTasks]=useState([]);
const[inputValue,setInputValue]=useState("");
const[deleted,setDeleted]=useState(inputValue);

const handleEdit=()=>{
  console.log("edit")
}

const handleDelete=(value)=>{
  if(tasks.length > 0){
 
   console.log(pops)
  }
  console.log("deleted")
}

const handleInput=(e)=>{
  setInputValue(e.target.value)
  console.log(e.target.value)
}

const handleClick=()=>{
  if(inputValue.trim() !== ""){
    setTasks([...tasks,inputValue]);
    setInputValue("");
  }
  console.log("click",inputValue)
}

  return(
    <div className="px-2 mx-auto py-4 max-w-[500px] max-h-[300px] bg-yellow-200">
    <Navbar />
    <InputBox value={inputValue} onChange={handleInput} onClick={handleClick}  />
    <TaskBox  tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} setTasks={setTasks}  />
    
    </div>
  )
}
export default App;