import ContactForm from "./ContactForm";

export default function Contact() {

    return <main className="contact-page">

        <section className="contact-section pt-lg lg:pt-xxl">
            <div className="container lg:py-xxl py-lg">
                <div className="px-md pb-lg">
                    <h2 className="text-primary mb-md">The Best Agency For Your Business</h2>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages popularised in the 1960s.</p>
                </div>

                <ContactForm />
            </div>
        </section>
    </main >
}