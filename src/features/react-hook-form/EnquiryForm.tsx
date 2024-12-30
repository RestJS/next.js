'use client'
import Button from "@/components/ui/Button";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";
import Select from "./components/Select";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import { useState } from "react";

export default function EnquiryForm() {

    // Variables declaration
    const [isPending, setisPending] = useState(false);
    const _useForm = useForm<FormData>({ mode: "onTouched" });
    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        setisPending(true);
        await fetch("/mail.php", {
            headers: { 'Content-Type': 'application/json' },
            method: "post",
            body: JSON.stringify(data)
        })
            .then(async (response) => {
                console.log(await response.json());
                setisPending(false);
                _useForm.reset();
            })
            .catch((error) => console.log(error))
    }

    return <div className="enquiry-form">
        <FormProvider {..._useForm} >

            <div className="px-md">
                {_useForm.formState.isSubmitSuccessful && <div className="bg-success/15 mb-md p-md border border-success rounded-[8] text-success">
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