import { Play } from 'lucide-react';
import { Link } from 'react-router';
import type { Lesson } from '~/types/lesson';
import { generateSlug } from '~/utils/generateSlug';

interface LessonCardProps {
    lesson: Lesson;
    isEnroll: boolean;
    course: string;
}

export default function LessonCard({
    lesson,
    isEnroll,
    course,
}: LessonCardProps) {
    return (
        <Link
            to={isEnroll ? `/course/${generateSlug(course)}/lessons/watch` : ''}
        >
            <div
                className={`bg-(--card-background) px-4 py-3 rounded-sm flex items-center ${
                    isEnroll && 'cursor-pointer'
                }`}
            >
                {isEnroll && <Play className="mr-4" />}

                <div>
                    <p className="text-sm mb-1 text-(--paragraphy)">
                        Aula {String(lesson.id).padStart(2, '0')}
                    </p>
                    <p className="font-bold text-(--headline)">
                        {lesson.title}
                    </p>
                </div>
            </div>
        </Link>
    );
}
