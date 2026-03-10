
import HeroSection from "../components/HeroSection"
import Eyebrow from "../components/Eyebrow"
import Chips from "../components/Chips"

export default function OnboardingPage() {
    return (
        <section class="py-section-y px-section-x max-w-7xl mx-auto min-h-svh flex flex-col gap-l justify-center pt-xxl ">
            <Eyebrow content="How Tuned was born" />
            <HeroSection
                headline='Learning, <em class="text-accent">tuned to you.</em>'
                paragraph="Tuned is an adaptive micro - learning platform that generates
                a personalized course from a single prompt — and re - teaches any concept
                you didn't get the first time. This is the story of why it exists,
                how it was built, and what comes next." />
            <div className="flex gap-3 flex-wrap">
                <Chips content="Tuned to your level" dot="true" />
                <Chips content="Adaptive Quizzes" />
                <Chips content="Streaming UX" />
                <Chips content="Claude API" />
            </div>
        </section>
    )
}