"use client"
import { AiFillCaretDown } from "react-icons/ai";

/** @interface AccordinProps */
export interface AccordinProps {
    heading: string;
    paragraph: string;
}

export default function Accordin({ data }: { data: AccordinProps[] }) {

    // Variables Declarations
    const openCollapse = (index: number) => {
        document.querySelector('.accordin')?.querySelectorAll('.accordin-item').forEach((item, idx) => {
            const content = item.querySelector('.accordin-content');
            const icon = item.querySelector('.accordin-icon');
            if (index == idx) {
                content?.classList.toggle('h-0');
                icon?.classList.toggle('rotate-180');
            }
            else {
                content?.classList.add('h-0');
                icon?.classList.remove('rotate-180');
            }
        });
    }

    return <div className="accordin">
        {data.map(({ heading, paragraph }, idx) =>
            <div key={idx} className="group">
                <div className="accordin-item border-accent border-1 rounded-[4] mb-md group-last:mb-0" onClick={() => openCollapse(idx)}>

                    <div className="flex items-center p-md cursor-pointer accordin-heading justify-between">
                        <h5>{heading}</h5>
                        <AiFillCaretDown className="ml-sm text-secondary text-[24px] ease-out duration-300 accordin-icon" />
                    </div>

                    <div className="h-0 accordin-content overflow-hidden">
                        <div className="p-md pt-0">
                            {paragraph}
                        </div>
                    </div>

                </div>
            </div>
        )}
    </div>
}