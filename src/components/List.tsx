import React from "react"

interface IProps{
    people:{
      name: string
      age: number
      url: string
      note?: string //note is optional(either a string or undefined) ,so using ?
    }[]
  } //this will basically check type of the props that List comp is going to have 

// WAY 1

//without destructuring
// const List = (props: IProps) =>{}

//after destructuring 
//here it is just a fx returning JSX
// const List = ({people}: IProps) =>{
//     return(
//         <div>
//             List
//         </div>
//     )
// }

//WAY 2 -- BE MORE SPECIFIC AS WHAT WE R DOING WITH TYPES
//instead of passing the type defining the prop , define the type write at the starting of the comp label
//here we r telling that its a react functional component with the type of IProps
const List:React.FC<IProps> = ({people}) =>{
  //dealing with fx in typescript

  //thru fx we always define what we want to return 
  //here we are not returning the JSX & ts is not able to catch that -- return () is essential to return JSX
  //its a good practice to define the return type of fx ,rather than having ts inference

  //how to know the datatype of the fx return , is once u r confident of the inner code is correct then hover over the name of fx , in tooltip it tells us the type 
  //put it after the bracket followed by a colon
  //once the datatype is defined then if u ever forgot something in the fx then error will be triggered by ts
  const renderList = (): JSX.Element[] =>{
    return people.map(person =>{
      return(
        <li className="List">
        <div className="List-header">
          <img className="List-img" src={person.url}/>
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
        </li>
      )
    })
  }

    return(
        <ul>
          {renderList()}
        </ul>
    )
}

export default List