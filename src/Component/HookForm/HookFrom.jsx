import React from 'react';
import useInputState from './HookForm';

const HookFrom = () => {
    const[name,handelName]=useInputState('rojoni')
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(name)
    }
    return (
        <div>
             <form onSubmit={submitHandler}>
           <input value={name} onChange={handelName} type="text" name="user" />
            <br />
            <input type="text"name="email" />
            <br />
            <button>Submit</button>
           </form>
        </div>
    );
};

export default HookFrom;