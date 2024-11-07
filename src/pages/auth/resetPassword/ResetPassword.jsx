import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, InputGroup } from "react-bootstrap";
import { IoIosPhonePortrait, IoIosLock } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from "./Reset.module.css"; // Make sure you have this CSS file
import axios from "axios";
import { toast } from "react-toastify";

const RestPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  let navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data) => {
    try {
      let response = await axios.post(
        "https://upskilling-egypt.com:3006/api/v1/Users/Reset",
        data
      );
      console.log(response.data);
      navigate("/signin");
      toast.success("Reset Password successful");
    } catch (error) {
      console.log(error.response.data);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}> Reset Password</h2>
      <p className={styles.subTitle}>
        {" "}
        Please Enter Your Otp or Check Your Inbox{" "}
      </p>

      {/* Email Input with Icon */}
      <InputGroup className="my-3">
        <InputGroup.Text>
          <IoIosPhonePortrait className={styles.icon} />
        </InputGroup.Text>
        <Form.Control
          type="email"
          placeholder="Enter your E-mail"
          {...register("email", { required: "Email is required" })}
        />
      </InputGroup>
      {errors.email && (
        <p className={styles.errorText}>{errors.email.message}</p>
      )}

      {/* Otp Input with Icon */}
      <InputGroup className="my-3">
        <InputGroup.Text>
          <IoIosPhonePortrait className={styles.icon} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="OTP"
          {...register("seed", { required: "otp number is required" })}
        />
      </InputGroup>
      {errors.seed && <p className={styles.errorText}>{errors.seed.message}</p>}

      {/* Password Input with Icon and Toggle Visibility */}
      <InputGroup className="my-3">
        <InputGroup.Text>
          <IoIosLock className={styles.icon} />
        </InputGroup.Text>
        <Form.Control
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter password"
          {...register("password", { required: "Password is required" })}
        />
        <InputGroup.Text
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        >
          {passwordVisible ? (
            <AiOutlineEyeInvisible className={styles.icon} />
          ) : (
            <AiOutlineEye className={styles.icon} />
          )}
        </InputGroup.Text>
      </InputGroup>
      {errors.password && (
        <p className={styles.errorText}>{errors.password.message}</p>
      )}

      {/* Confirm Password Input with Icon and Toggle Visibility */}
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <IoIosLock className={styles.icon} />
        </InputGroup.Text>
        <Form.Control
          type={passwordVisible ? "text" : "password"}
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        <InputGroup.Text
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        >
          {passwordVisible ? (
            <AiOutlineEyeInvisible className={styles.icon} />
          ) : (
            <AiOutlineEye className={styles.icon} />
          )}
        </InputGroup.Text>
      </InputGroup>
      {errors.confirmPassword && (
        <p className={styles.errorText}>{errors.confirmPassword.message}</p>
      )}
      <Button type="submit" className={styles.btn}>
        Reset Password
      </Button>
    </Form>
  );
};

export default RestPassword;
