export default function Eyebrow({ content = 'Eyebrow' }) {
    return (
        <div className="flex items-center gap-xs">
            <div className="w-m h-px bg-accent"></div>
            <span className="sans-regular text-xs text-accent font-normal uppercase tracking-[.14em]">{content}</span>
        </div>
    )
}
