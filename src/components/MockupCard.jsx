export default function MockupCard({ header, badge, footer, children }) {
    return (
        <div className="w-full mb-5 border border-stroke-weak rounded-sm bg-overlay overflow-hidden">
            {(header || badge) &&
                <div class="px-6 py-4 border-b border-stroke-weak flex items-center justify-between gap-2">
                    {header && <div className="serif-regular text-xl text-text-strong">{header}</div>}
                    {badge && <div className="font-label">{badge}</div>}
                </div>
            }
            <div className="px-6 py-4">
                {children}
            </div>
            {footer &&
                <div className="px-6 py-4 border-t border-stroke-weak">
                    {footer}
                </div>
            }
        </div>
    )

}


