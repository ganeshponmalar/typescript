
import { useState } from "react"
import axios from "axios";


export const Api = ()=>{

const [apiCall,setApiCall] = useState<any>(null);

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

const fetchData = async ()=>{

    try{
        const response = await axios.get(apiUrl)
        console.log(response)
       
        setApiCall(response.data)

    }catch(error){
        console.log('error')
    }
}

    return(

        <div>
          <p>API DATA</p>
          <button onClick={fetchData}>click</button>
          <div>
        <h2>Response:</h2>
        <pre>{JSON.stringify(apiCall, null, 2)}</pre>
      </div>
        </div>
    )
}