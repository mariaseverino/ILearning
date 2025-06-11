import CatalogFilter from '~/components/catalog-filter';
import CourseCard from '~/components/course-card';
import type { Route } from './+types/enroll-courses';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Overview' },
        { name: 'description', content: 'CourseOverview' },
    ];
}

export default function EnrollCourses() {
    const courses = [
        {
            title: 'HTML e CSS para Iniciantes',
            category: 'Frontend',
            instructor: 'Julia Martins',
            tags: ['iniciante', 'HTML', 'CSS', 'Responsivo', 'iniciante'],
            duration: 6,
            progress: 80,
        },
        {
            title: 'React.js com TypeScript',
            category: 'Frontend',
            instructor: 'Paulo Ribeiro',
            tags: ['intermediário', 'React', 'TypeScript', 'Hooks'],
            duration: 12,
            progress: 45,
        },
        {
            title: 'API RESTful com Node.js e Express',
            category: 'Backend',
            instructor: 'Fernando Almeida',
            tags: ['intermediário', 'Node.js', 'Express', 'REST API'],
            duration: 10,
            progress: 20,
        },
        {
            title: 'Banco de Dados com PostgreSQL',
            category: 'Backend',
            instructor: 'Amanda Souza',
            tags: ['intermediário', 'PostgreSQL', 'SQL', 'ORM'],
            duration: 8,
            progress: 60,
        },
        {
            title: 'Design de Interfaces com Figma',
            category: 'Design',
            instructor: 'Larissa Lopes',
            tags: ['iniciante', 'Figma', 'UI Design', 'Prototipação'],
            duration: 7,
            progress: 90,
        },
        {
            title: 'UX Writing: Texto e Experiência',
            category: 'Design',
            instructor: 'Larissa Lopes',
            tags: [
                'iniciante',
                'UX Writing',
                'Design',
                'Acessibilidade',
                'iniciante',
            ],
            duration: 4,
            progress: 50,
        },
        {
            title: 'Fundamentos de DevOps com Docker',
            category: 'DevOps',
            instructor: 'Bruno Castro',
            tags: [
                'intermediário',
                'Docker',
                'CI/CD',
                'Containers',
                'intermediário',
            ],
            duration: 9,
            progress: 35,
        },
        {
            title: 'Kubernetes para Desenvolvedores',
            category: 'DevOps',
            instructor: 'Marcos Tavares',
            tags: ['avançado', 'Kubernetes', 'DevOps', 'Orquestração'],
            duration: 11,
        },
        {
            title: 'Desenvolvimento de Apps com React Native',
            category: 'Mobile',
            instructor: 'Patrícia Mendes',
            tags: ['intermediário', 'React Native', 'Mobile', 'Cross-Platform'],
            duration: 10,
            progress: 70,
        },
        {
            title: 'Clean Code e Boas Práticas em JavaScript',
            category: 'Backend',
            instructor: 'Rodrigo Rocha',
            tags: ['avançado', 'Clean Code', 'JavaScript', 'Arquitetura'],
            duration: 6,
            progress: 100,
        },
    ];

    return (
        <div className="">
            <div className="flex justify-between flex-col">
                <h1 className="text-4xl font-semibold mt-10 mb-5 text-(--headline)">
                    Meus Cursos
                </h1>
                <p className="text-(--headline) mb-6 text-xl">
                    Continue seus estudos
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="lg:col-span-3 order-2 lg:order-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
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

                <div className="lg:col-span-1 order-1 lg:order-2">
                    <CatalogFilter />
                </div>
            </div>
        </div>
    );
}
