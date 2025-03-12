
import Button from "./Button";

const InputBox=({onChange,value,onClick})=>{
  
    return(
        <div className=" flex justify-center items-center gap-4 w-4/5 mx-auto">
<input type="text" value={value} onChange={onChange} className="h-8 w-4/5 border px-2 bg-red-100" placeholder="enter task here" />
<Button text={"Save"} onClick={onClick}  className="bg-blue-500" />
        </div>
    )
}
export default InputBox;