
type ButtonProp = {
    handleClick : (event : React.MouseEvent<HTMLButtonElement>,id:number) =>  void,
}

function Buttont(props:ButtonProp) {
  return (
    <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
  )
}

export default Buttont