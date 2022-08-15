import React,{ useState } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import ('../index.css');

const SignUp = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(res => res.json())
      .then(data => {
        if(data.error){
          toast.error(data.message)
        }else{
          toast.success('Registered successfully')
          navigate('/login');
        }
      })
  }

  return (
    <div className='sign-up-wrapper'>
        <div className='form-wrap'>
            <h2>Sign Up</h2>
            <div className='input-wrap'>
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName (e.target.value)}
                />
                <label htmlFor="name">Email</label>
                <input 
                type="text"
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                />
                <label htmlFor="name">Password</label>
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

export default SignUp