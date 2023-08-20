import { useState } from "react";

type AuthUser = {

    name: string,

    email: string

}

export const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)   //holding the value of type AuthUser or null

    const handleLogin = () => {

        setUser({

            name: 'Vishwas',

            email: 'vishwas@example.com'

        })
    }

    return (

        <div>

            <button onClick={handleLogin}>Login</button>


            <div>User name is {user.name}</div>

            <div>email name is{user.email}</div>

        </div>
    )
}