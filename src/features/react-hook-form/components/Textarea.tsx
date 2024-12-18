import { useFormContext } from "react-hook-form";


/** @interface TextareaProps */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    title: string;
    name: string;
}

export default function Textarea({ title, name }: TextareaProps) {

    // Variables Declaration
    const { register, formState: { errors } } = useFormContext();

    return <div className="form-control relative">
        <textarea className="peer form-input border border-solid text-[13px] leading-[19px] p-md rounded-[4px] block w-full focus:border-primary valid:border-primary h-[125px] resize-none" id={name} required {...register(name)} />
        <label htmlFor={name} className="absolute top-md left-md text-[13px] leading-[19px] text-black ease-in duration-300 peer-focus:-top-[14px] peer-focus:p-sm peer-focus:text-[10px] peer-focus:leading-[10px] peer-focus:text-primary peer-focus:bg-white peer-focus:left-sm peer-valid:-top-[14px] peer-valid:p-sm peer-valid:text-[10px] peer-valid:leading-[10px] peer-valid:text-primary peer-valid:bg-white peer-valid:left-sm cursor-text">{title}</label>
    </div>
}