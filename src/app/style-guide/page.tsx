import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import LinkButton from "@/components/ui/LinkButton";

export const metadata: Metadata = {
    title: "Style Guide"
};

export default function StyleGuide() {

    return <main className="style-guide-page default">
        <div className="my-xxl container">
            <h1 className="text-black px-md">Style Guide</h1>
            <div className="flex flex-col lg:flex-row mt-xl">
                <div className="px-md basis-1/5">
                    <img src="/assets/images/logo/black.png" alt="logo" className="w-full" />
                </div>

                <div className="flex flex-col px-md lg:grow gap-md">
                    <div className="flex flex-col lg:flex-row gap-md">
                        <div className="bg-primary p-xl max-h-xxl"></div>
                        <div className="bg-secondary p-xl max-h-xxl"></div>
                        <div className="bg-accent p-xl max-h-xxl"></div>
                        <div className="bg-black p-xl max-h-xxl"></div>
                        <div className="bg-white p-xl max-h-xxl"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-md">
                        <div className="bg-primary-gradient p-xl max-h-xxl"></div>
                    </div>
                </div>
            </div>

            <div className="px-md my-xl">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></p>
                <p><Link href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Link></p>

                <ul className="mt-md">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                </ul>
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="px-md text-center">
                    <h3 className="mb-md">Primary Button</h3>
                    <Button variant="primary" type="submit">Click Me</Button>
                </div>

                <div className="px-md text-center">
                    <h3 className="mb-md">Secondary Button</h3>
                    <Button variant="secondary" type="button">Learn More</Button>
                </div>

                <div className="px-md text-center">
                    <h3 className="mb-md">Accent Button</h3>
                    <LinkButton title="Read More" href="#" />
                </div>
            </div>
        </div>
    </main>
}