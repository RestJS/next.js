import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import useError from "../../hooks/useError";


/** @interface InputProps */
interface InputProps {
    title: string;
    name: string;
}

export default function InputNumber({ name, title }: InputProps) {

    // Variables Declaration
    const { register, formState: { errors }, getValues } = useFormContext();
    const errorMessage = useError();
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(getValues(name));
    }, [getValues(name)]);

    return <div className="form-control relative">
        <input type="text" className={`peer form-input border border-solid text-[13px] leading-[19px] p-md rounded-[4px] block w-full focus:border-primary ${isValid && `border-primary`} ${errors[name] && '!border-red-600'}`} id={name} maxLength={10} pattern='[0-9]{10}' required {...register(name, { ...errorMessage.required, ...errorMessage.number })} />
        <label htmlFor={name} className={`absolute top-md left-md text-[13px] leading-[19px] text-black ease-in duration-300 peer-focus:-top-[14px] peer-focus:p-sm peer-focus:text-[10px] peer-focus:leading-[10px] peer-focus:text-primary peer-focus:bg-white peer-focus:left-sm ${isValid && `!-top-[14px] p-sm !text-[10px] !leading-[10px] text-primary bg-white left-sm`} cursor-text`}>{title}</label>
        {errors[name] && <span className="invisible peer-required:visible absolute -bottom-[13px] left-sm p-sm bg-white text-[10px] leading-[10px] text-red-600">{`${errors[name]?.message}`}</span>}
    </div>
};