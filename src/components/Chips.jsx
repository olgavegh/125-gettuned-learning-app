export default function Chips({ content, dot = false }) {
    return (

        <div className="inline-flex items-center gap-2 px-4 py-2 border border-rule rounded-xs text-sm text-muted tracking-[0.05em]">
            {dot && <span className="size-2 bg-accent border border-accent rounded-full"></span>}
            {content}
        </div>

    )
}
