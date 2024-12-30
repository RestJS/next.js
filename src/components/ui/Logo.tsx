import Image from "next/image";
import Link from "next/link";

/** @interface LogoProps */
interface LogoProps {
    variant?: string;
    className: string;
    onClick?: () => void;
}

export default function Logo({ variant = "blue", className, onClick }: LogoProps) {

    return <Link href="/" title="Ghaziabad Defence Academy" onClick={onClick}>
        <Image src={`/assets/images/logo/${variant}.png`} className={className} alt="ghaziabad defence academy logo" height={497} width={502} />
    </Link>
}