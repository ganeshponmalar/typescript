

type ContantProps ={   //event props in typescript

    styles: React.CSSProperties
}


export const Contant = (props:ContantProps)=>{

    return(

        <div style={props.styles}>

            Text content goes here

        </div>
    )
}