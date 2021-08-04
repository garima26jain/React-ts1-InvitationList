import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from "./components/List"

//if we have a lot of data type to be defined then we create a interface & later use it where we want
export interface IState{
  people:{
    name: string
    age: number
    url: string
    note?: string //note is optional(either a string or undefined) ,so using ?
  }[] //people obj having array of obj with these type
}

function App() {
  //useState  hook is responsible for storing data inside the component
  // array of objects having list of people --each obj storing the people info
  const[people, setPeople] = useState<IState["people"]>([
    {
      name: "Harry Potter",
      url: "",
      age: 27,
      note: "Woah !! excited😁"
    }
  ])
  //above is exactly how we deal with state in react with ts app

  return (
    <div className="App">
      <h1>Invitation List</h1>
      {/* now we render the data by passing that in child component */}
      {/* render the cards in a seperate comp ,so we'll pass that state to comp & it'll be responsible for rendering */}
      <List people={people}/> 
      {/* it allows type checking in child as well as parent */}
      {/* when we pass state without defining any interface in the child comp then error occurs */}
      
      {/* Form comp -- reason for passing both bcoz we want to manipulate the fields by setPeople & appending to list of people  */}
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
