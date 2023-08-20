 
 type PersonProps = {

    name:{

    first: string,

    last: string,

    third: string
}
}


export const Person = (props:PersonProps) =>{

    return(

        <div>
            
            <h1>{props.name.first} you haveing 10 document</h1>

            But

            <p>{props.name.last} haveing only 5 document</p>

            <h1>React {props.name.third}</h1>

        </div>
    )
}