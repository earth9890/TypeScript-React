import { useState } from 'react'

type Auth = {

    name: string,
    email : string
}
function User() {
//   const [user, setUser] = useState<Auth |null>(null);
  const [user, setUser] = useState<Auth>({} as Auth);
    

    const handleLogin = () => {
        setUser({
            name: "Neeraj",
            email : "NM@bsf.io"
      })
     }
    // const handleLogOut = () => { 
    //     setUser(null)

    // }
    return (
      
        <>  
            <button onClick={handleLogin} >
                Login
            </button>
        {/* <button onClick={handleLogOut}> LogOut</button> */}
            {/* <div>User is {IsloggedIn ? "logged in" : "logged out "} </div>
             */}
            <h1>User name is {user.name}</h1>
            <h1>User email is {user.email}</h1>

        </>
  
  )
}

export default User