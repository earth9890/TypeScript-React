import React ,{ useContext} from 'react'
import { UserContext } from './UserContext';

function User() {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: "Neeraj",
                email : "ok@bsf.io"
           }) 
        }
    }
     const handleLogout = () => {
         if (userContext)
            
             userContext.setUser(null);
    }
    return (
      
      <div>
          
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleLogout}>Logout</button>
            <h1>User name is {userContext?.user?.name}</h1>
            <h1>User Email is{ userContext?.user?.email}</h1>
          
    </div>
  )
}

export default User