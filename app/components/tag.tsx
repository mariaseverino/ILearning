interface TagProps {
    title: string;
    className?: string;
}

export default function Tag({
    title,
    className = 'border-(--color2) text-(--color2)',
}: TagProps) {
    return (
        <span
            className={`rounded-full px-3 py-1 border-2 font-medium ${className}`}
        >
            {title}
        </span>
    );
}
