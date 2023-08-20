import React from'react';


type ButtonProps ={  //click event props in typescrypt

    handleClick: ( event: React.MouseEvent<HTMLButtonElement>, id: number) => void

}



export const Button = (props:ButtonProps)=>{

    return(

        <div>

            <button onClick={event=>props.handleClick(event,1)}>click</button>
            
        </div>
    )
}