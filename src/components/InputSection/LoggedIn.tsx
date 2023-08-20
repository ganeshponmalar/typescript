import { useState } from "react"



export const LoggedIn = ()=>{

    const [isLoggedIn,setLoggedIn] = useState(false)

    

    const handleLogin = ()=>{

        setLoggedIn(true)
    }

    const handleLogOut = ()=>{

        setLoggedIn(false)
    }

  

    return(
        <div>

            <button onClick={handleLogin}>Login</button>

            <button onClick={handleLogOut}>Logout</button>

            <div>User is {isLoggedIn? 'logged In': 'logged out'}</div>




        </div>
    )
}