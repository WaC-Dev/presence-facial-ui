import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form className='w-50 my-5 py-5 mx-auto'>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name='username' placeholder='username' onChange={e => {setUsername(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name='password' placeholder='password' onChange={e => {setPassword(e.target.value)}} />
                </div>
                
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;