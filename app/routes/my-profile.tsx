import { useEffect, useState } from 'react';
import type { Route } from './+types/my-profile';
import Calendar from 'react-calendar';
import { Flame } from 'lucide-react';
import CourseCard from '~/components/course-card';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'MyProfile' },
        { name: 'description', content: 'MyProfile' },
    ];
}

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

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyProfile() {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const data: Course[] = [
            {
                id: '1',
                title: 'Introdução ao Desenvolvimento Web',
                description:
                    'Aprenda os fundamentos do desenvolvimento web moderno com HTML, CSS e JavaScript.',
                thumbnailUrl:
                    'https://img.freepik.com/psd-gratuitas/modelo-de-design-de-miniatura-criativa-do-youtube_505751-6437.jpg?semt=ais_hybrid&w=740',
                category: 'Frontend',
                instructor: 'Maria Clara Silva',
                lessons: [
                    {
                        id: '1-1',
                        title: 'O que é Desenvolvimento Web?',
                        videoUrl: 'https://www.youtube.com/embed/zJSY8tbf_ys',
                    },
                    {
                        id: '1-2',
                        title: 'HTML Básico',
                        videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU',
                    },
                ],
            },
            {
                id: '2',
                title: 'Design de Interfaces com Figma',
                description:
                    'Crie interfaces modernas e responsivas usando Figma, do zero até o protótipo final.',
                thumbnailUrl:
                    'https://img.freepik.com/psd-gratuitas/modelo-de-design-de-miniatura-criativa-do-youtube_505751-6437.jpg?semt=ais_hybrid&w=740',
                category: 'UI/UX',
                instructor: 'Carlos Mendes',
                lessons: [
                    {
                        id: '2-1',
                        title: 'Primeiros passos no Figma',
                        videoUrl: 'https://www.youtube.com/embed/FTFaQWZBqQ8',
                    },
                    {
                        id: '2-2',
                        title: 'Design de Telas Mobile',
                        videoUrl: 'https://www.youtube.com/embed/9GgxinPwAGc',
                    },
                ],
            },
            {
                id: '3',
                title: 'Fundamentos de Node.js',
                description:
                    'Explore o ambiente Node.js e crie APIs RESTful com Express.',
                thumbnailUrl:
                    'https://img.freepik.com/psd-gratuitas/modelo-de-design-de-miniatura-criativa-do-youtube_505751-6437.jpg?semt=ais_hybrid&w=740',
                category: 'Backend',
                instructor: 'Fernanda Oliveira',
                lessons: [
                    {
                        id: '3-1',
                        title: 'Introdução ao Node.js',
                        videoUrl: 'https://www.youtube.com/embed/TlB_eWDSMt4',
                    },
                    {
                        id: '3-2',
                        title: 'Criando uma API com Express',
                        videoUrl: 'https://www.youtube.com/embed/lY6icfhap2o',
                    },
                ],
            },
        ];

        setCourses(data);
    }, []);

    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const streak = 3;

    const studyDay = (weekDay: number) => {
        const today = new Date().getDay();

        // const studied = weekDay >= today - streak + 1;
        const studied = (today - weekDay + 7) % 7 < streak;

        if (weekDay > today || !studied) {
            return 'text-gray-500 border-gray-300';
        }
        return 'bg-orange-300 text-white border-orange-300';
    };

    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="">
            <section>
                <div className="flex justify-between">
                    <h1 className="text-4xl font-semibold my-10 text-(--headline)">
                        Olá, Maria!
                    </h1>
                </div>
                <div className="flex bg-(--card-background) rounded-2xl px-8 py-5 items-center gap-8">
                    <div>
                        <p className="text-(--headline) mb-6 text-xl">
                            Voce iniciou 6 cursos essa semana
                        </p>
                        <Link
                            to="/catalog"
                            className="rounded-full px-3 py-1.5 bg-(--color4)"
                        >
                            Ver todos
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        {courses.map((course, index) => (
                            <CourseCard
                                title={course.title}
                                category={course.category}
                                instructor={course.instructor}
                                progress={60}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-6 gap-5 mt-5">
                <div className="col-span-4">
                    <h2 className="text-(--headline) mb-6 text-xl font-medium">
                        Estatiticas
                    </h2>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="flex flex-col justify-between rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow bg-[#b87eed]/20 col-span-2">
                            <div className="flex items-center flex-col text-(--color4) gap-3">
                                <p className="text-lg font-bold">Seu streak</p>
                                <div className="flex items-center">
                                    <span className="text-4xl font-bold">
                                        {streak}
                                    </span>
                                    <Flame
                                        className={`size-9 ${
                                            streak > 0 ? 'text-orange-400' : ''
                                        }`}
                                    />
                                </div>
                                <p className="text-base">
                                    dias de estudo seguidos!
                                </p>
                            </div>

                            <div className="flex justify-between gap-2 mt-5">
                                {days.map((day, index) => (
                                    <div
                                        className={`rounded-full p-2 size-8 flex items-center justify-center border-2 ${studyDay(
                                            index
                                        )}`}
                                    >
                                        {day}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#cfff5e]/20 rounded-2xl p-5 flex flex-col items-center justify-center gap-5 text-center text-[#cfff5e]">
                            <p className="text-4xl font-bold">3</p>
                            <p className="text-xl font-medium">
                                Cursos concluidos
                            </p>
                        </div>
                        <div className="bg-[#8c7dff]/20 rounded-2xl p-5 flex flex-col items-center justify-center gap-5 text-center text-[#8c7dff]">
                            <p className="text-4xl font-bold">4</p>
                            <p className="text-xl font-medium">
                                Cursos iniciados
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 ">
                    <p className="text-lg font-medium mb-4 text-(--headline) ">
                        {new Date().toLocaleDateString('pt-BR', {
                            month: 'long',
                            year: 'numeric',
                        })}
                    </p>
                    <Calendar
                        value={value}
                        tileClassName={({ date }) =>
                            date.toDateString() === new Date().toDateString()
                                ? 'bg-(--color2) text-white rounded-full'
                                : ''
                        }
                        calendarType="gregory"
                        showNavigation={false}
                        className="rounded-md text-(--paragraphy)"
                    />
                </div>
            </section>
        </div>
    );
}
