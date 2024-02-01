import React, { useState } from 'react'
import PropTypes from 'prop-types'
// async function loginUser(credentials){
//     return fetch('http://localhost:8080/login',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     }).then(data => data.json())
// }

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [error, setError] = useState(false);

    const handleEmail = (e) => {
        setSubmit(false);
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setSubmit(false);
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const token = await loginUser({
        //     email, 
        //     password,
        // });
        // console.log(email);
        // console.log(password);
        // setToken(token);
        const userString = localStorage.getItem('users');
        const userList = JSON.parse(userString);
        if (email === "" || password === "") {
            setError(true);
            showFailure();
        }
        else {
            setError(false);
            setSubmit(true);
            console.log(userList);
            const currentUser = userList.find(user =>
                user.email === email
            );
            if (currentUser == undefined) {
                setError1(true);
                showFailure1();

            }
            else if (password !== currentUser.password) {
                setError2(true)
                showFailure2();

            }
        }
    }

    const showFailure = () => {
        return <div style={{ display: error ? "" : 'none' }}>
            <h3>
                Please enter all the credentials
            </h3>
        </div>
    }

    const showFailure1 = () => {
        return <div style={{ display: error1 ? "" : 'none' }}>
            <h3>
                User not found
            </h3>
        </div>
    }

    const showFailure2 = () => {
        return <div style={{ display: error2 ? "" : 'none' }}>
            <h3>
                Wrong Password
            </h3>
        </div>
    }


    const showSuccess = () => {
        return <div style={{display : !error && !error1 && !error2 ? "" : 'none'}}>
            <h1>Welcome</h1>
        </div>
    }

    return (
        <div className='loginPage'>
            {error && showFailure()}            
            {error1 && showFailure1()}
            {error2 && showFailure2()}
            {submit && showSuccess()}
            <form onSubmit={handleSubmit}>
                <h2>User Login</h2>
                <label>Email: </label>
                <input type="email" name="" id="email" onChange={handleEmail} />
                <br />
                <label htmlFor="">Password: </label>
                <input type="password" name="" id="password" onChange={handlePassword} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage

// LoginPage.propTypes = {
//     setToken: PropTypes.func.isRequired
// };