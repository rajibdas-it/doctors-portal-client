import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => console.log(data);
  return (
    <div className="h-[800px] flex flex-col justify-center items-center">
      <div className="w-96">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Email <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full mb-8">
            <label className="label">
              <span className="label-text">
                Password <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full"
          />
        </form>
        <p className="mt-3">
          New to doctor portal website?{" "}
          <Link to="/signup">
            <span className="text-secondary underline">signup</span>
          </Link>
        </p>
        <div className="divider">OR</div>
        <input
          type="submit"
          value="continue with google"
          className="btn btn-outline w-full"
        />
      </div>
    </div>
  );
};

export default Login;
