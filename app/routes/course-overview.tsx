import type { Route } from './+types/course-overview';
import avatar from '../layout/avatar.png';
import { useState } from 'react';
import EnrollCard from '../components/course-overview/enroll-card';
import type { Course } from '~/types/course';
import CourseContent from '../components/course-overview/course-content';
import CourseHeader from '../components/course-overview/course-header';
import CourseSection from '../components/course-overview/course-section';
import type { Lesson } from '~/types/lesson';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Overview' },
        { name: 'description', content: 'CourseOverview' },
    ];
}

export default function CourseOverview() {
    const lessons: Lesson[] = [
        {
            id: '1',
            title: 'Introdução ao React',
            description:
                'Aprenda os conceitos básicos do React neste tutorial completo',
            videoUrl:
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        },
        {
            id: '2',
            title: 'Hooks Avançados',
            description: 'Dominando useEffect, useContext e hooks customizados',

            videoUrl:
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        },
        {
            id: '3',
            title: 'TypeScript com React',
            description:
                'Como usar TypeScript para criar aplicações React mais robustas',

            videoUrl:
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        },
        {
            id: '4',
            title: 'Estado Global com Context',
            description: 'Gerenciamento de estado em aplicações React grandes',

            videoUrl:
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        },
        {
            id: '5',
            title: 'Performance e Otimização',
            description:
                'Técnicas para otimizar a performance de aplicações React',

            videoUrl:
                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        },
    ];

    const isEnroll = true;

    const [course, setCourse] = useState<Course>({
        id: '1',
        title: 'Introdução ao Desenvolvimento Web',
        description:
            'Aprenda os fundamentos do desenvolvimento web moderno com HTML, CSS e JavaScript.',
        thumbnailUrl:
            'https://img.freepik.com/psd-gratuitas/modelo-de-design-de-miniatura-criativa-do-youtube_505751-6437.jpg?semt=ais_hybrid&w=740',
        category: 'Frontend',
        instructor: 'Maria Clara Silva',
    });

    return (
        <div className="pb-5">
            <CourseHeader course={course} />
            <div className="grid lg:grid-cols-6 lg:px-44 gap-5 md:px-14 px-5">
                <div className="lg:col-span-4">
                    <CourseSection title="Conteudos">
                        <CourseContent
                            lessons={lessons}
                            isEnroll={isEnroll}
                            course="Curso de React"
                        />
                    </CourseSection>
                    <CourseSection title="Instrutor">
                        <div className="border border-(--secondary) p-4 rounded-md mt-4 flex gap-3">
                            <img
                                src={avatar}
                                alt="User avatar"
                                className="block size-12"
                            />
                            <div>
                                <p className="font-medium text-(--headline)">
                                    {course.instructor}
                                </p>
                                <p className="text-sm mt-1 text-(--paragraphy)">
                                    Tech Lead
                                </p>
                            </div>
                        </div>
                    </CourseSection>
                </div>
                <EnrollCard
                    title="Curso de React"
                    duration={82}
                    lessons={220}
                    dificulty="Intermediario"
                    isEnroll={isEnroll}
                />
            </div>
        </div>
    );
}
