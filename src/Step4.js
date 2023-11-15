import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { choosePhoneNumber, chooseAddress, completeStep } from "./rootSlice";

const Step4 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const phoneNumber = useSelector((state) => state.phoneNumber);
  const address = useSelector((state) => state.address);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { phoneNumber, address } });

  const onSubmit = (data) => {
    dispatch(choosePhoneNumber(data.phoneNumber));
    dispatch(chooseAddress(data.address));
    dispatch(completeStep("step4"));
    navigate("./result");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            placeholder="Phone number "
            className="input input-bordered w-full max-w-xs"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Phone number is Required",
              },
            })}
          />
          <label className="label">
            {errors.phoneNumber?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.phoneNumber.message}
              </span>
            )}
          </label>
        </div>
        <div className="mx-auto form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs"
            {...register("address", {
              required: {
                value: true,
                message: "Address is Required",
              },
            })}
          />
          <label className="label">
            {errors.address?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.address.message}
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

        <Link className="flex justify-center" to="/step2/step3">
          <button class="mt-2 btn w-full max-w-xs text-white">Back</button>
        </Link>
      </form>
    </>
  );
};

export default Step4;
