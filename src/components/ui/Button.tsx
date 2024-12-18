import { ReactNode } from "react";

/** @interface ButtonProps */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: string;
    children: ReactNode,
    size?: string;
}

export default function Button({ variant = "default", children, size, ...rest }: ButtonProps) {

    // Variables Declarations
    const ButtonText = "font-default text-[18px] leading-8 font-semibold uppercase";
    const ButtonSize = size ?? "w-[250px] h-[50px]";
    const Buttonborder = "border-2 border-solid rounded-full";

    const Variant: { [key: string]: string } = {
        'default': "text-black border-black before:content-[''] before:bg-black hover:text-white bg-white",
        'primary': "text-white border-accent before:content-[''] before:bg-white hover:text-accent bg-accent",
        'secondary': "text-white border-secondary before:content-[''] before:bg-primary hover:text-white hover:border-primary bg-secondary",
        'info': "text-accent border-accent before:content-[''] before:bg-accent hover:text-white bg-white",
    };

    return <button className={`btn ${ButtonText} ${ButtonSize} ${Buttonborder} ${Variant[variant]}`} {...rest}>{children}</button>
}