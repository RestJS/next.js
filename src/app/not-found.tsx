import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Page Not Found"
};

export default function NotFound() {

    return <main className="not-found">
        <section className="hero-section py-xxl">

            <div className="container px-md text-center py-xxl">
                <h1 className="mb-md text-primary">OOPS! that page can’t be found.</h1>
                <h4 className="mb-xxl">Return to the home page or check our blog below.</h4>

                <Link href="/" title="Back To Home" className="!no-underline mx-auto">
                    <Button variant="secondary" size="w-full max-w-[290px] h-[57px] m-auto"> <FaHome className="text-[30px] mr-[12px]" /> Back To Home</Button>
                </Link>
            </div>

        </section>
    </main>
}