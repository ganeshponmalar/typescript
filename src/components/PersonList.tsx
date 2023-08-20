 
 type PersonListProps={
       
    names:{

        first: string

        last: string

    }[]
}



export const PersonList = (props :PersonListProps)=>{ //typeing on array


    return(

        <div>
            <h2>Bruce Wayne{props.names.map(name=>{ 
                
                return(
                    <h2>{name.first} and {name.last}</h2>
                )
            })}</h2>

            <h2>ganesh React Developer {props.names.map(sec=>{
                return(
                    <h2>{sec.first} and {sec.last}</h2>
                )
            })}</h2>

            <h2>james sir!{props.names.map(value=>{
                return(

                    <h2>{value.first} and {value.last}</h2>
                )
            })}</h2>


        </div>
    )
}