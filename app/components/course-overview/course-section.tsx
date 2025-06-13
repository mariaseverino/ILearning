import type { ReactNode } from 'react';

interface CourseSectionProps {
    title: string;
    children: ReactNode;
}

export default function CourseSection({ title, children }: CourseSectionProps) {
    return (
        <section className="mt-7">
            <div className="">
                <h2 className="font-medium text-lg text-(--paragraphy)">
                    {title}
                </h2>
                {children}
            </div>
        </section>
    );
}
