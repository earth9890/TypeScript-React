type StatusProps= {
    status : "loading" | "success"  | "error"
}
function Status(props: StatusProps) {

    let message
    if (props.status == "loading")
    {
        message = "Loading..."
    }       
    else if (props.status == "error")
    {
        message = "Error Fetching Data"
    }
    else if (props.status == "success")
    {
        message = "Data Fetchec Successfully"
    }
    return (
        <>
            <h1>
               Status -  {message}
        </h1>
        </>
    )
  
}

export default Status