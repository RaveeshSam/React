import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise ((resolve) => setTimeout(resolve, 3000))
    console.log(data)
    reset()
  }

  return (
    <>
      {isSubmitting && <p>Submitting...</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login Form</h2>
      <br />
        <input
          {...register("username", { required: true, minLength: 3 })}
          type="text"
          placeholder="Username"
        />
        <br />
        {errors.username && <span>Min length is 3</span>}
        <br />
        <br />
        <input
          {...register("password", {
            required: true,
            minLength: {value: 5, message: "Min length is 5"},
            maxLength: {value: 10, message: "Max length is 10"},
          })}
          type="password"
          placeholder="Password"
        />
        <br />
        {errors.password && <span>{errors.password.message}</span>}
        <br />
        <br />
        <input
          {...register("confirmpassword", {
            required: true,
            validate: (value) => value === getValues("password") || "Password did not matched"
          })}
          type="password"
          placeholder=" Confirm Password"
        />
        <br />
        {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
        <br />
        <br />
        <input className="submit" disabled={isSubmitting} type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
