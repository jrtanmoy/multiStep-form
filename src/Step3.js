import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { chooseAge, chooseGender } from "./rootSlice";


const Step3 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const age = useSelector(state => state.firstName)
  const gender = useSelector(state => state.lastName)
  // const { register, handleSubmit } = useForm({ defaultValues: { base } })
  const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: { age, gender } });

  const onSubmit = (data) => {
    dispatch(chooseAge(data.age))
    dispatch(chooseGender(data.gender))
    navigate("./step4")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="number"
            placeholder="Your age"
            className="input input-bordered w-full max-w-xs"
            {...register("age", {
              required: {
                value: true,
                message: 'Your age is Required'
              }
            })}
          />
          <label className="label">
            {errors.age?.type === 'required' && <span className="label-text-alt text-red-500">{errors.age.message}</span>}
          </label>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button>Next</button>
      </form>
    </>
  );
};

export default Step3;