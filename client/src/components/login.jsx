import React,{ useState } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import ('../index.css');

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => res.json())
      .then(data => {
        if(data.success){
            navigate('/')
        }else{
            console.log(data.message);
        }
      })
  }

  return (
    <div className='sign-up-wrapper'>
        <div className='form-wrap'>
            <h2>Log In</h2>
            <div className='input-wrap'>
                <label htmlFor="email">Email</label>
                <input 
                type="text"
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                type="text"
                value={password}
                onChange={(e) => setPassword (e.target.value)}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login