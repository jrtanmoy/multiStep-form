import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { choosePhoneNumber, chooseAdress } from "./rootSlice";


const Step4 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const phoneNumber = useSelector(state => state.phoneNumber)
  const adress = useSelector(state => state.adress)

  const { register, formState: { errors }, handleSubmit } = useForm({ defaultValues: { phoneNumber, adress } });

  const onSubmit = (data) => {
    dispatch(choosePhoneNumber(data.phoneNumber))
    dispatch(chooseAdress(data.adress))
    navigate("./result")

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
                message: 'Phone number is Required'
              }
            })}
          />
          <label className="label">
            {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
          </label>
        </div>
        <div className="mx-auto form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Adress</span>
          </label>
          <input
            type="text"
            placeholder="Adress"
            className="input input-bordered w-full max-w-xs"
            {...register("adress", {
              required: {
                value: true,
                message: 'Adress is Required'
              }
            })}
          />
          <label className="label">
            {errors.adress?.type === 'required' && <span className="label-text-alt text-red-500">{errors.adress.message}</span>}
          </label>
        </div>


        <div className="flex justify-center">
          <input className='btn w-full max-w-xs text-white' type="submit" value="Next" />
        </div>

        <Link className="flex justify-center" to="/step2/step3"><button class="mt-2 btn w-full max-w-xs text-white">Back</button></Link>
      </form>
    </>
  );
};

export default Step4;