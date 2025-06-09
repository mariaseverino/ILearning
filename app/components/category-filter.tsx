interface CategoryFilterProps {
    category: string;
    categoryOptions: string[];
}

export default function CategoryFilter({
    category,
    categoryOptions,
}: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {categoryOptions.map((option, index) => (
                <div key={index} className="relative">
                    <input
                        type="checkbox"
                        id={`${category}-${index}`}
                        name={category}
                        value={option}
                        className="peer hidden"
                    />
                    <label
                        htmlFor={`${category}-${index}`}
                        className="cursor-pointer px-3 py-1 rounded-full border border-(--paragraphy) text-(--paragraphy) peer-checked:bg-(--color2) peer-checked:text-white peer-checked:border-(--color2) transition text-sm"
                    >
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}
