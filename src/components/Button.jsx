
const Button=({text,className,onClick})=>{
    return(
        <button onClick={onClick} className={`cursor-pointer size-4 border h-6 w-10 p-0.5 ${className}`}>
            {text}
        </button>
    )
}
export default Button;