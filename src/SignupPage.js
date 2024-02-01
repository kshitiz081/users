import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
function SignupPage() {
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const onSubmit = (data, e) => {
        e.preventDefault();
        if (name === "" || password === "" || email === "") {
            setError(true);
        }
        else {
            setError(false);
            setSubmit(true);
            setUsers([...users, data])
            users.map((user) =>{
                console.log(user.name + " " + user.email + " " + user.password);
            })
        }
    }
    function handleName(e) {
        setName(e.target.value);
        setSubmit(false);
    }

    function handlePassword(e) {
        setEmail(e.target.value);
        setSubmit(false);
    }

    function handleEmail(e) {
        setPassword(e.target.value);
        setSubmit(false);
    }



    function showSuccess() {
        return (
            <div style={{ display: submit ? "" : 'none' }}>
                <h3>User {name} has been registered successfully</h3>
            </div>
        )
    }

    function showFailure() {
        return (
            <div style={{ display: error ? "" : 'none' }}>
                <h3>Please enter all the fields</h3>
            </div>
        )
    }
    return (
        <div className='container'>
            <h2>User Signup</h2>
            {submit && showSuccess()}
            {error && showFailure()}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name: </label>
                <input {...register("name", { required: true })} type="text" onChange={handleName} />
                <br />
                <label htmlFor="">Email: </label>
                <input {...register("email", { required: true })} type="email" onChange={handleEmail} />
                <br />
                <label htmlFor="">Password: </label>
                <input {...register("password", { required: true })} type="password" onChange={handlePassword} />
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default SignupPage
