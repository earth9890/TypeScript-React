import './App.css'
import { Greet } from './Components/Greet';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Status from './Components/Status';
import Heading from './Components/Heading';
import Oscars from './Components/Oscars';
import Buttont from './Components/Buttont';
import Input from './Components/Input';
import Container from './Components/Container';
import LoggedIn from './Components/State/LoggedIn';
import User from './Components/State/User';
import Counter from './Components/State/Counter';
import Box from './Components/Context/Box';
import { ThemeContextProvider } from './Components/Context/ThemeContext';
import { UserContextProvider } from './Components/Context/UserContext';


import User2 from './Components/Context/User';
import DOMRef from './Components/Ref/DOMRef';
import Private from './Components/Auth/Private';
import Profile from './Components/Auth/Profile';


const PersonObj =  {
  first: "Hari"
  ,
  last : "Sugandhi"
}

const nameList = [
   {
  first: "Hari",
  last : "Sugandhi"
},
    {
  first: "Harshu"
  ,
  last : "Sugandhi"
}, {
  first: "Vaibhu"
  ,
  last : "Sugandhi"
}]


function App() {
  return (
    <>
      <Greet name="Harish" salary={500} isLoggedIn={false} />
      <Person name={PersonObj} />
      <PersonList names={nameList} />
      <Status status="success" /> 
      <Heading>Hello Children</Heading>
      <Oscars> 
       <Heading> Oscar goes to RRR</Heading>
      </Oscars>
      <Greet name="Snehal" isLoggedIn={true} />
      <Buttont handleClick={(event) => {
        console.log("Its a button event",event)
      }} />
      <Input value='' handleChange={(event) => console.log("Its a Input event",event)
      } />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
      <User />
      <Counter />
      <ThemeContextProvider>
              <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
      <User2/>
      </UserContextProvider>
      <DOMRef />
      <Private isLoggedIn={true} Component={ Profile} />
    </>
  )
}

export default App
