'use client'
import Button from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/features/react-hook-form";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { BsArrowRight } from "react-icons/bs";

export default function ContactForm() {

    // Variables declaration
    const _useForm = useForm<FormData>({ mode: "onTouched" });
    const onSubmit: SubmitHandler<FormData> = (data: FormData) => console.log(data);

    return <div className="contact-form">
        <FormProvider {..._useForm} >
            <form className="flex flex-wrap flex-col lg:flex-row" onSubmit={_useForm.handleSubmit(onSubmit)} id="contactForm" noValidate>
                <div className="p-md basis-4/12 grow-0 shrink-0">
                    <Input title="Enter Your Name" name="name" />
                </div>

                <div className="p-md basis-4/12 grow-0 shrink-0">
                    <Input name="company_name" title="Enter Your Company Name" />
                </div>

                <div className="p-md basis-4/12 grow-0 shrink-0">
                    <Input type='number' name="phone_number" title="Enter Your Contact Number" />
                </div>

                <div className="p-md basis-4/12 grow-0 shrink-0">
                    <Input type='email' name="email" title="Enter Your Email Address" />
                </div>

                <div className="p-md basis-4/12 grow-0 shrink-0">
                    <Select name="industry_type" title="Industry Type" />
                </div>

                <div className="p-md basis-4/12 grow-0 shrink-0">
                    <Select name="requirement" title="Your Requirement">
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                    </Select>
                </div>

                <div className="p-md basis-full grow-0 shrink-0">
                    <Textarea title="Enter Your Message" name="message" />
                </div>

                <div className="p-md basis-full grow-0 shrink-0 text-center flex justify-center">
                    <Button variant="secondary" type="submit" size="w-[290px] h-[54px]">Send Request <BsArrowRight className="text-[25px] ml-sm" /></Button>
                </div>
            </form>
        </FormProvider>
    </div>
}