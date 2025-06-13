import { MoveLeft } from 'lucide-react';
import { Link } from 'react-router';
import Tag from '~/components/tag';
import type { Course } from '~/types/course';

interface CourseHeaderProps {
    course: Course;
}

export default function CourseHeader({ course }: CourseHeaderProps) {
    return (
        <section className="border-b border-(--secondary) pb-4 md:px-14 px-5">
            <div className="lg:max-w-6xl m-auto">
                <Link
                    to="/"
                    className="flex items-center gap-1 pt-6 text-(--paragraphy)"
                >
                    <MoveLeft />
                    <span className="text-xs">Voltar</span>
                </Link>
                <div className="mt-4">
                    <h1 className="text-xl md:text-4xl font-bold  line-clamp-1 text-(--headline)">
                        {course.title}
                    </h1>
                    <p className="text-sm mt-2 md:text-md line-clamp-2 pb-6 text-(--paragraphy)">
                        {course.description}
                    </p>
                    <div className="flex text-[10px] mt-3 mb-4 gap-2 font-medium">
                        {['Frontend', 'Frontend', 'Frontend', 'Frontend'].map(
                            (tag, index) => (
                                <Tag title={tag} key={index} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
