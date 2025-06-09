import { Code, CodeXml, LayoutGrid, Server } from 'lucide-react';
import { Link } from 'react-router';
import { Tag } from '~/routes/course-overview';
import { generateSlug } from '~/utils/generateSlug';

export interface Lesson {
    id: string;
    title: string;
    videoUrl: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    category: string;
    instructor: string;
    lessons: Lesson[];
}
interface CourseCardProps {
    title: string;
    category: string;
    instructor?: string;
    tags?: string[];
    duration?: number;
    progress?: number;
}

export default function CourseCard({
    title,
    category,
    instructor,
    tags,
    duration,
    progress,
}: CourseCardProps) {
    const getBG = (category: string) => {
        switch (category) {
            case 'Frontend':
                return 'bg-(--color2) text-blue-900 border-blue-900';
            case 'UI/UX':
                return 'bg-(--color3) text-purple-900 border-purple-900';
            case 'Backend':
                return 'bg-(--color1) text-green-900 border-green-900';
            default:
                return 'bg-(--color4) text-gray-900 border-gray-900';
        }
    };

    const getIcon = (category: string) => {
        switch (category) {
            case 'Frontend':
                return (
                    <div className="bg-(--color2) p-2 rounded-md w-9">
                        <CodeXml className="size-5 text-blue-900" />
                    </div>
                );

            case 'Backend':
                return (
                    <div className="bg-(--color1) p-2 rounded-md w-9">
                        <Server className="size-5 text-green-900" />
                    </div>
                );
            case 'UI/UX':
                return (
                    <div className="bg-(--color3) p-2 rounded-md w-9">
                        <LayoutGrid className="size-5 text-purple-900" />
                    </div>
                );
            default:
                return (
                    <div className="bg-(--color4) p-2 rounded-md w-9">
                        <Code className="size-5 text-gray-900" />
                    </div>
                );
        }
    };

    return (
        <Link to={`/course/${generateSlug(title)}/overview`}>
            <div
                className={`flex flex-col justify-between rounded-xl p-4 cursor-pointer h-full ${getBG(
                    category
                )}`}
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-2">
                        {getIcon(category)}
                        <h3 className="font-medium text-lg leading-tight">
                            {title}
                        </h3>
                        {instructor && (
                            <p className="text-sm text-black/70">
                                {instructor}
                            </p>
                        )}

                        {duration && (
                            <p className="text-md text-black/70 mb-3">
                                {duration}h
                            </p>
                        )}
                    </div>
                    {progress && (
                        <div className="mt-4">
                            <div className="bg-black/10 h-2 rounded-full overflow-hidden">
                                <div className="bg-black/40 h-full w-3/4 transition-all duration-300 rounded-l-full"></div>
                            </div>
                            <span className="text-xs mt-1 block">
                                {progress}% concluído
                            </span>
                        </div>
                    )}

                    {tags && (
                        <div>
                            <div className="flex text-[10px] gap-2 font-medium">
                                {tags.map(
                                    (tag, index) =>
                                        index < 2 && (
                                            <Tag
                                                title={tag}
                                                key={index}
                                                className={getBG(category)}
                                            />
                                        )
                                )}

                                {tags.length > 2 && (
                                    <Tag
                                        title={`+${tags.length - 2}`}
                                        className={getBG(category)}
                                        key={2}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}
