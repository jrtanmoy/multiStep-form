import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseFirstName, chooseLastName, completeStep } from "./rootSlice";

const Step1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { firstName, lastName } });

  const onSubmit = (data) => {
    dispatch(chooseFirstName(data.firstName));
    dispatch(chooseLastName(data.lastName));
    dispatch(completeStep("step1"));
    navigate("./step2");
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mx-auto form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full max-w-xs"
            {...register("firstName", {
              required: {
                value: true,
                message: "First Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.firstName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.firstName.message}
              </span>
            )}
          </label>
        </div>
        <div className=" mx-auto form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full max-w-xs"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.lastName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.lastName.message}
              </span>
            )}
          </label>
        </div>

        <div className="flex justify-center">
          <input
            className="btn w-full max-w-xs text-white"
            type="submit"
            value="Next"
          />
        </div>
      </form>
    </div>
  );
};
export default Step1;
