'use client'
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { BsArrowRight } from "react-icons/bs";
import Select from "./components/Select";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import useMail from "./hooks/useMail";

export default function ContactForm() {

    // Variables declaration
    const _useForm = useForm<FormData>({ mode: "onTouched" });
    const [data, setData] = useState<FormData>();
    const [isPending, isSubmited] = useMail(data);
    const onSubmit: SubmitHandler<FormData> = (data) => {
        setData(data);
        _useForm.reset();
    }

    return <div className="contact-form">
        <FormProvider {..._useForm} >

            <div className="px-md">
                {isSubmited && <div className="bg-success/15 mb-md p-md border border-success rounded-[8] text-success">
                    Thank you for filling out your information!
                </div>
                }
            </div>

            <form className="lg:flex flex-wrap" onSubmit={_useForm.handleSubmit(onSubmit)} id="contactForm" noValidate>

                <div className="p-md basis-1/2 grow-0 shrink-0">
                    <Select name="course" title="Select Course">
                        <option value="NDA">NDA</option>
                        <option value="Sanik School">Sanik School</option>
                        <option value="RIMC">RIMC</option>
                        <option value="RMS">RMS</option>
                    </Select>
                </div>

                <div className="p-md basis-1/2 grow-0 shrink-0">
                    <Select name="mode" title="Select Mode">
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                    </Select>
                </div>

                <div className="p-md basis-1/2 grow-0 shrink-0">
                    <Input title="Enter Your Name" name="name" />
                </div>

                <div className="p-md basis-1/2 grow-0 shrink-0">
                    <Input type='number' name="phone_number" title="Enter Your Phone Number" />
                </div>

                <div className="p-md basis-full grow-0 shrink-0">
                    <Textarea title="Enter Your Message" name="message" />
                </div>

                <div className="p-md basis-full grow-0 shrink-0 text-center flex justify-center">
                    {isPending ?
                        <Button variant="primary" type="button" size="w-[290px] h-[54px]"><span className="animate-spin w-[25] h-[25] rounded-full border-white border-t-white/20 border-4 mr-sm" />Processing</Button>
                        : <Button variant="primary" type="submit" size="w-[290px] h-[54px]">Send Request <BsArrowRight className="text-[25px] ml-sm" /></Button>
                    }
                </div>
            </form>
        </FormProvider>
    </div>
}