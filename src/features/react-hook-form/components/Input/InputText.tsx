import React from "react";
import { useFormContext } from "react-hook-form";
import useError from "../../hooks/useError";


/** @interface InputProps */
interface InputProps {
    title: string;
    name: string;
}

export default function InputText({ name, title }: InputProps) {

    // Variables Declaration
    const { register, formState: { errors } } = useFormContext();
    const errorMessage = useError();

    return <div className="form-control relative">
        <input type="text" className={`peer form-input border border-solid text-[13px] leading-[19px] p-md rounded-[4px] block w-full focus:border-primary peer-valid:border-primary ${errors[name] && '!border-red-600'}`} id={name} required {...register(name, errorMessage.required)} />
        <label htmlFor={name} className="absolute top-md left-md text-[13px] leading-[19px] text-black ease-in duration-300 peer-focus:-top-[14px] peer-focus:p-sm peer-focus:text-[10px] peer-focus:leading-[10px] peer-focus:text-primary peer-focus:bg-white peer-focus:left-sm peer-valid:-top-[14px] peer-valid:p-sm peer-valid:text-[10px] peer-valid:leading-[10px] peer-valid:text-primary peer-valid:bg-white peer-valid:left-sm cursor-text">{title}</label>
        {errors[name] && <span className="invisible peer-required:visible absolute -bottom-[13px] left-sm p-sm bg-white text-[10px] leading-[10px] text-red-600">{`${errors[name]?.message}`}</span>}
    </div>
};