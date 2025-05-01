import { useState } from "react"



const useInputState = (defaultValue = null) => {
    const [value,setValue]=useState(defaultValue);

    const handelChange=(val)=>{
        setValue(val);
    }
    return[value,handelChange]
}
export default useInputState;