import InputEmail from "./InputEmail";
import InputNumber from "./InputNumber";
import InputText from "./InputText";


/** @interface InputProps */
interface InputProps {
    type?: string;
    title: string;
    name: string;
}

export default function Input({ type, ...props }: InputProps) {
    if (type == "email") return <InputEmail {...props} />
    if (type == "number") return <InputNumber {...props} />
    return <InputText {...props} />
}