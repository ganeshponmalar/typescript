import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import {Win} from './components/Win';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Contant } from './components/Contant';
import { LoggedIn } from './components/InputSection/LoggedIn';
import { Api } from './components/Api';
import { User } from './components/User';
import { Counter } from './components/Counter';
import { Box } from './components/InputSection/Box';

import { ThemeContextProvider } from './components/InputSection/ThemeContext';

 


function App() {

const personName = {  //typeing the object props

  first:'Bruce',

  last:'Wayne',

  third:'development'

}

const nameList = [ //typeing on array list
  {
    first:'ganesh',
    last: 'naveen'
  },

  {
    first:'clark',
    last:'kent'
  },

  {
    first:'Princess',
    last: "Diana"
  }

]


  return (

    <div className="App">
          
     <Greet name='ganesh' section='EB-2' message={20} isLoggedIn = {true} department='mechanical'/>

     <Person name={personName}/>

     <PersonList names={nameList}/>

     <Status status='loading'/>

  
    <Heading>Placeholder text</Heading>

    <Button handleClick={(event,id)=>{

      console.log('Button Clicked',event,id)

    }}/>


   <Input value='' handleChange={(event)=> console.log(event)}/>

    <Contant styles={{border: '2px solid black', padding:'2rem', backgroundColor:'lightgreen'}}/>
    <LoggedIn/>
    <Api/>
    <User/>

    <Counter/>

    <ThemeContextProvider>

      <Box/>

    </ThemeContextProvider>

  
    

  
    </div>
  );
}

export default App;
