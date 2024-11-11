import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { IoIosPhonePortrait } from 'react-icons/io';
import { IoLockClosedOutline } from 'react-icons/io5';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/AuthContext';
import { AUTH_URL } from '../../../services/url';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth(); // Destructure login function from AuthContext
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data) => {
    try {
      // Login API call
      //'https://upskilling-egypt.com:3006/api/v1/Users/Login'
      const response = await axios.post(`${AUTH_URL}Login`, data);
      const token = response.data.token;
  
      if (token) {
        // Store token in local storage and update authentication context
        localStorage.setItem('token', token);
        login(token);
  
        // Make the get request with the token in the authorization header
        const userResponse = await axios.get(`{${AUTH_URL}currentUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log(userResponse.data);
        navigate('/home');
        toast.success('Login successful');
      } else {
        toast.error('No token received.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };
  

  return (
    <Form className='w-100' onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Login</h2>
      <p className={styles.subTitle}>Welcome Back! Please enter your details</p>
      <InputGroup className="my-3">
        <InputGroup.Text>
          <IoIosPhonePortrait className={styles.icon}/>
        </InputGroup.Text>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          {...register("email", { required: "Email is required" })}
        />
      </InputGroup>
      {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <IoLockClosedOutline className={styles.icon}/>
        </InputGroup.Text>
        <Form.Control 
          type={passwordVisible ? "text" : "password"} 
          placeholder="Enter password" 
          {...register("password", { required: "Password is required" })}
        />
        <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
          {passwordVisible ? <AiOutlineEyeInvisible className={styles.icon}/> : <AiOutlineEye className={styles.icon}/>}
        </InputGroup.Text>
      </InputGroup>
      {errors.password && <p className={styles.errorText}>{errors.password.message}</p>}

      <div className={styles.linkContainer}>
        <Link to="/signup" className={styles.registerLink}>Register Now?</Link>
        <Link to="/forget-password" className={styles.forgotLink}>Forget Password?</Link>
      </div>

      <Button type="submit" className={styles.btn}>Login</Button>
    </Form>
  );
};

export default Login;
