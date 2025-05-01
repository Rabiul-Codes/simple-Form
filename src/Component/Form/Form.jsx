

const Form = () => {
    const submitHandler = (e)=>{
        e.preventDefault()
           console.log('clicked ')
           console.log(e.target.user.value)
           console.log(e.target.email.value)
    }
    return (
        <div>
           <form onSubmit={submitHandler}>
           <input type="text" name="user" />
            <br />
            <input type="text"name="email" />
            <br />
            <button>Submit</button>
           </form>
        </div>
    );
};

export default Form;