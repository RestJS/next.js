import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export default function LinkButton({ title, href }: { title: string, href: string }) {

    return <Link href={href} title={title} className="flex font-default font-normal text-accent btn-link text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px]">
        <span>{title}</span>
        <HiArrowLongRight className="text-[24px] lg:text-[30px] ml-sm" />
    </Link>
}