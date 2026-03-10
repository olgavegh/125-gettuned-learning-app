

export default function HeroSection({ headline, paragraph }) {
    return (
        <>
            <h1 className="serif-regular text-7xl font-bold leading-[0.95] tracking-[-0.03em] text-ink max-w-[14ch] animate-in fade-in ease-in delay-150 duration-300" dangerouslySetInnerHTML={{ __html: headline }} />

            <p class="sans-regular text-lg text-muted max-w-[52ch]">
                {paragraph}
            </p>
        </>
    )
}

