import { ChevronDown } from 'lucide-react';
import LessonCard from './lesson-card';
import type { Lesson } from '~/types/lesson';

interface CourseContentProps {
    lessons: Lesson[];
    isEnroll: boolean;
    course: string;
}

export default function CourseContent({
    lessons,
    isEnroll,
    course,
}: CourseContentProps) {
    return (
        <div className="border border-(--secondary) p-4 rounded-md mt-4">
            <div className="flex flex-col gap-3">
                {lessons.map((lesson, index) => (
                    <LessonCard
                        lesson={lesson}
                        isEnroll={isEnroll}
                        key={index}
                        course={course}
                    />
                ))}
            </div>

            <div className="flex items-center justify-center mt-4 gap-1 font-medium cursor-pointer text-(--secondary)">
                <span className="text-base">Ver mais</span>
                <ChevronDown />
            </div>
        </div>
    );
}
