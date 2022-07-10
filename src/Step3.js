import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { chooseAge, chooseGender } from "./rootSlice";


const Step3 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const age = useSelector(state => state.age)
  const gender = useSelector(state => state.gender)

  const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: { age, gender } });

  const onSubmit = (data) => {
    dispatch(chooseAge(data.age))
    dispatch(chooseGender(data.gender))
    navigate("./step4")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto form-control w-full max-w-xs">
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
        <div className="mx-auto form-control w-full max-w-xs">
          <label htmlFor="gender" className="label">
            <span className="label-text">Gender:</span>
          </label>

          <select className="input input-bordered w-full max-w-xs" id="gender" {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="female">Others</option>
          </select>
        </div>
        <div className="flex justify-center">
          <input className='mt-4 btn w-full max-w-xs text-white' type="submit" value="Next" />
        </div>

        <Link className="flex justify-center" to="/step2"><button class="mt-2 btn w-full max-w-xs text-white">Back</button></Link>
      </form>
    </>
  );
};

export default Step3;