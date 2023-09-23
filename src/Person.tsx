import { useState } from "react";
// inerface is a way to define shape of an object
interface Props {
    name:string;
    email:string;
    age:number;
    isMarried:boolean;
    friends:string[];
}

const Person = (props:Props) => {
    // useState declaration in typescript
    const[name,setName]=useState<string>("")
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1> 
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} Married</h1>
      {props.friends.map((friend:string) => (
        <h1 >{friend}</h1> 
      ))}
    </div>
  );
};



export default Person;
