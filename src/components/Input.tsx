import React from "react"

type InputProps ={

value: string

handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void

}


 export const Input =(props: InputProps)=>{

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{ //it taking the event type what we given 

        console.log(event)

    }

    return <input type='text' value={props.value} onChange={handleInputChange }/>

}