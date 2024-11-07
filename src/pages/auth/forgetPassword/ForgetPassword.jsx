// src/pages/Forgetpass.js
import { useForm } from 'react-hook-form';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { IoIosPhonePortrait } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styles from './Forget.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
let navigate = useNavigate();
  
  const onSubmit = async (data) => {
    try {
      let response = await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request', data);
      console.log(response.data);
      toast.success(response.data);
      navigate('/reset-password');
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
      <h2 className={styles.title}>Forgot Your Password?</h2>
      <p className={styles.subTitle}>No worries! Please enter your email and we will send a password reset link </p>

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

      <Button type="submit" className={styles.btn}>Submit</Button>
    </Form>
    </>
  );
};

export default ForgetPassword;
