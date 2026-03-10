const variants = {
    primary:  'bg-brand text-white hover:opacity-90',
    secondary: 'bg-transparent border border-brand text-brand hover:bg-brand-tint',
    ghost:    'bg-transparent text-text-weak hover:text-text-strong hover:bg-brand-ghost',
    danger:   'bg-accent2 text-white hover:opacity-90',
}

export default function Button({
    children,
    icon,
    variant = 'primary',
    type = 'button',
    disabled = false,
    onClick,
    className = '',
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`sans-regular inline-flex items-center gap-2 px-4 py-2 text-sm rounded-xs transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
        >
            {icon && <span aria-hidden="true">{icon}</span>}
            {children}
        </button>
    )
}
