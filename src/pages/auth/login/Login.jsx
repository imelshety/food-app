// src/pages/Login.js
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

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
let navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data) => {
    try {
      let response = await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Login', data);
      console.log(response.data);
      navigate('/home');
      toast.success('Login successful');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        // General fallback message if the error structure is unexpected
        toast.error('An error occurred. Please try again.');
      }
    }
  };
  

  return (
    <>
    <Form className='w-100' onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Login</h2>
      <p className={styles.subTitle}>Welcome Back! Please enter your details</p>

      {/* Email Input with Icon */}
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

      {/* Password Input with Icon and Toggle Visibility */}
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

      {/* Links for Register and Forget Password */}
      <div className={styles.linkContainer}>
        <Link to="/signup" className={styles.registerLink}>Register Now?</Link>
        <Link to="/forget-password" className={styles.forgotLink}>Forget Password?</Link>
      </div>

      <Button type="submit" className={styles.btn}>Login</Button>
    </Form>
    </>
  );
};

export default Login;
