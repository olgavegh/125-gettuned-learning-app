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
            {/* Q1 */}
            <label className="flex flex-col gap-2 group">
                <span className="font-label ">
                    What do you want to learn?
                </span>
                <textarea
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    placeholder="e.g. TypeScript for JavaScript developers"
                    autoComplete="off"
                    rows={2}
                    className="font-input px-4 py-2 w-full bg-transparent border border-stroke-weak rounded-xs outline-none placeholder:text-stroke-weak focus:border-brand transition-colors duration-200 resize-none"
                />
                <span className={`font-hint`}>
                    Add more detail — try "IT Job Interview or Reack hooks"
                </span>
            </label>

            <fieldset className="group">
                <legend className="font-label mb-2">
                    What's your current level?
                </legend>
                <div className="flex gap-2 flex-wrap">
                    {levels.map(item => (
                        <label
                            key={item}
                            className={`font-input px-4 py-2 border rounded-xs transition-colors duration-200
                                ${level === item
                                    ? 'border-brand bg-brand-tint text-text-strong'
                                    : 'border-stroke-weak hover:border-stroke-strong'}`}
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
                <legend className="font-label mb-2">
                    How do you learn best ?
                </legend>
                <div className="flex gap-2 flex-wrap">
                    {types.map(item => (
                        <label
                            key={item}
                            className={`font-input px-4 py-2 border rounded-xs transition-colors duration-200
                                ${type === item
                                    ? 'border-brand bg-brand-tint text-text-strong'
                                    : 'border-stroke-weak hover:border-stroke-strong'}`}
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
                <Button type="submit" variant="primary" disabled={topic.split(" ").length < 2 || !level || !type}>
                    ✦ Generate Course
                </Button>
            </div>

        </form>
    )
}

