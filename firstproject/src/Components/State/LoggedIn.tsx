import {useState} from 'react'
function LoggedIn() {

    const handleLogin = () => {
        setIsLoggedIn(true)
     }
    const handleLogOut = () => { 
        setIsLoggedIn(false)

    }
    const [IsloggedIn, setIsLoggedIn] = useState(false);
    return (
      
        <>  
            <button onClick={handleLogin} >
                Login
            </button>
        <button onClick={handleLogOut}> LogOut</button>
            <div>User is {IsloggedIn ? "logged in" : "logged out "} </div>
        </>
  
  )
}

export default LoggedIn