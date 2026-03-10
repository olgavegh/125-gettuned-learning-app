
import HeroSection from "../components/HeroSection"
import Eyebrow from "../components/Eyebrow"
import Chips from "../components/Chips"
import MockupCard from "@/components/MockupCard"
import CourseForm from "@/components/CourseForm"

export default function OnboardingPage() {
    function handleGenerate() {

    }

    return (
        <div class="bg-paper py-section-y px-section-x max-w-7xl mx-auto min-h-svh flex flex-col md:flex-row gap-l items-center pt-xxl">
            <section class="flex flex-col gap-l flex-1">
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
            <section class="flex-1 w-full">
                <MockupCard
                    header="Tell us what you want to learn"
                    badge="Onboarding"
                >
                    < CourseForm onSubmit={handleGenerate} />
                </MockupCard >
            </section >
        </div >


    )
}