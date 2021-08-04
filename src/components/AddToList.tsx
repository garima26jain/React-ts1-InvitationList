import React, { useState } from "react"
import {IState as Props} from "../App"

interface IProps{
    people: Props["people"] // Accessing the interface
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) =>{
    const [formfields,setFormFields] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormFields({
            ...formfields,
            [e.target.name]:  e.target.value
        })
    }
    //we don't want to return anything
    const handleClick = (): void =>{
        //if any field is false / empty --
        if(!formfields.name || !formfields.age || !formfields.note){
            return 
        }
        //if everything is fine
        setPeople([
            ...people,
            {
                name: formfields.name,
                age: parseInt(formfields.age),
                url: formfields.img,
                note: formfields.note
            }
        ])
        setFormFields({
            name: "",
            age: "",
            note: "",
            img: ""
        })
    }

    return(
        <div className="AddToList">
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="name"
                value={formfields.name}
                placeholder="Name"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="age"
                value={formfields.age}
                placeholder="Age"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="img"
                value={formfields.img}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                className="AddToList-input"
                name="note"
                value={formfields.note}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList