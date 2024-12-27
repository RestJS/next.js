export default function SubpageHeroSection({ title }: { title: string }) {

    return <section className="subpage-hero-section h-[250] lg:h-[400]">
        <div className="container px-md">
            <p className="text-white/20 text-stroke text-[32px] leading-[40px] tracking-[1.6] lg:tracking-[3] lg:text-[59px] lg:leading-[1] font-bold uppercase text-right pt-md lg:pt-xl">{title}</p>
        </div>
    </section>
}