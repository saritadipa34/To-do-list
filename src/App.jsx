import { useState } from "react";
import InputBox from "./components/InputBox";
import Navbar from "./components/Navbar"
import TaskBox from "./components/TaskBox";

const App=()=>{
const[tasks,setTasks]=useState([])
const[inputValue,setInputValue]=useState("")
const[show,setShow]=useState(null)

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
    <TaskBox  />
    
    </div>
  )
}
export default App;