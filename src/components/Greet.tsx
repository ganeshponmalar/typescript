type GreetProps = {

    name: string

    section: string

    message ?: number

    isLoggedIn: boolean

    department: string
}


export const Greet = (props:GreetProps)=>{

    const {message = 0} = props

    return(

        <div>
           
            <h2>
                {props. isLoggedIn ?
        
                `welcome ${props.name} you have ${message}  unread messages and your section is ${props.section} ${props.department}`

                :'Welcome guest'
                
                }
                
                </h2>

            <h1>
                {props.isLoggedIn ?

                `Welcome ${props.name} you have ${message}`
                
                : 'welcome ganesh'

                }


            </h1>
            <p>Please logged in to your Account </p>
            
    
        </div>
    )
}