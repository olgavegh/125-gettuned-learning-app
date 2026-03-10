import { useState } from 'react'
import Button from './Button'

const levels = ['Beginner', 'Intermediate', 'Advanced']
const types = ['Examples', 'Theory', 'Step-by-step']

export default function CourseForm() {
    const [topic, setTopic] = useState('')
    const [level, setLevel] = useState('')
    const [type, setType] = useState('')

    return (
        <form aria-label="Generate your course" onSubmit={e => e.preventDefault()} className="flex flex-col gap-6">

            <label className="flex flex-col gap-2 group">
                <span className="sans-regular text-xs text-text-weak group-focus-within:text-brand uppercase tracking-[0.12em] transition-colors duration-200">
                    What do you want to learn?
                </span>
                <input
                    type="text"
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    placeholder="e.g. TypeScript for JavaScript developers"
                    autoComplete="off"
                    className="px-4 py-2 sans-regular w-full bg-transparent border border-stroke-weak text-text-strong text-base outline-none placeholder:text-stroke-strong focus:border-brand transition-colors duration-200"
                />
            </label>

            <fieldset>
                <legend className="sans-regular text-xs text-text-weak uppercase tracking-[0.12em] mb-2">
                    What's your current level?
                </legend>
                <div className="flex gap-2 flex-wrap">
                    {levels.map(item => (
                        <label
                            key={item}
                            className={`sans-regular text-sm px-4 py-2 border rounded-xs cursor-pointer transition-colors duration-200
                                ${level === item
                                    ? 'border-brand bg-brand-tint text-text-strong'
                                    : 'border-stroke-weak text-text-weak hover:border-stroke-strong'}`}
                        >
                            <input
                                type="radio"
                                name="level"
                                value={item}
                                checked={level === item}
                                onChange={() => setLevel(item)}
                                className="sr-only"
                            />
                            {item}
                        </label>
                    ))}
                </div>
            </fieldset>

            <fieldset>
                <legend className="sans-regular text-xs text-text-weak uppercase tracking-[0.12em] mb-2">
                    How do you learn best ?
                </legend>
                <div className="flex gap-2 flex-wrap">
                    {types.map(item => (
                        <label
                            key={item}
                            className={`sans-regular text-sm px-4 py-2 border rounded-xs cursor-pointer transition-colors duration-200
                                ${type === item
                                    ? 'border-brand bg-brand-tint text-text-strong'
                                    : 'border-stroke-weak text-text-weak hover:border-stroke-strong'}`}
                        >
                            <input
                                type="radio"
                                name="level"
                                value={item}
                                checked={level === item}
                                onChange={() => setType(item)}
                                className="sr-only"
                            />
                            {item}
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="flex items-center justify-between pt-2 border-t border-stroke-weak">
                <span className="sans-regular text-xs text-text-weak">~5 min · 5 lessons · 2 quizzes</span>
                <Button type="submit" variant="primary" disabled={!topic || !level || !type}>
                    ✦ Generate Course
                </Button>
            </div>

        </form>
    )
}

