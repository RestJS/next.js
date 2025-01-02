import type { Metadata } from "next";
import SubpageHeroSection from "@/components/ui/SubpageHeroSection";
import ContactForm from "@/features/react-hook-form/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us Today"
};

export default function Contact() {

    return <main className="contact-page">
        <SubpageHeroSection title={`${metadata.title}`} />

        <div className="contact-section lg:py-xxl py-lg">
            <div className="container lg:py-xxl py-lg">

                <div className="px-md pb-lg">
                    <h1 className="text-primary mb-sm">Contact Us Today</h1>
                    <p>Fill Out the Information Below to Request Service.</p>
                </div>

                <ContactForm />
            </div>
        </div>

    </main>
}