import { useState } from "react";


const SetFullForm = () => {
    const [email,setEmail]=useState(null)
    const formHandler = (e)=>{
    e.preventDefault()
    console.log(e.target)
    console.log(email)
    }
    const emailHandel=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
   
    return (
        <div>
           <form onSubmit={formHandler} > 
            <input onChange={emailHandel} type="text" name="email" />
            <br />
            <input type="text" />
            <br />
            <button>submit</button>
           </form>
        </div>
    );
};

export default SetFullForm;