import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact Us Today"
};

export default function Contact() {

    return <main className="contact-page">

        <section className="contact-section pt-lg lg:pt-xxl">
            <div className="container lg:py-xxl py-lg">
                <div className="px-md pb-lg">
                    <h1 className="text-primary mb-sm">Contact Us Today</h1>
                    <p>Fill Out the Information Below to Request Service.</p>
                </div>

                <ContactForm />
            </div>
        </section>
    </main >
}