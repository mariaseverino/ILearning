import {
    ChartNoAxesColumnIncreasing,
    Clock,
    GraduationCap,
    Video,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface EnrollCardProps {
    title: string;
    duration: number;
    lessons: number;
    dificulty: string;
    isEnroll: boolean;
}

export default function EnrollCard({
    title,
    duration,
    lessons,
    dificulty,
    isEnroll,
}: EnrollCardProps) {
    return (
        <aside className="mt-5 lg:mt-18 lg:col-span-2">
            <div className="bg-(--card-background) rounded-md p-4">
                <h2 className="text-lg md:text-xl font-bold mb-4 text-(--headline)">
                    {title}
                </h2>
                <div className="flex flex-col gap-4 text-(--paragraphy)">
                    <EnrollCardItem
                        icon={<Clock size={20} />}
                        text={`Aprox. ${duration}h de estudo`}
                    />
                    <EnrollCardItem
                        icon={<Video size={20} />}
                        text={`${lessons} aulas`}
                    />
                    <EnrollCardItem
                        icon={<ChartNoAxesColumnIncreasing size={20} />}
                        text={`${dificulty}`}
                    />
                    <EnrollCardItem
                        icon={<GraduationCap size={20} />}
                        text="Certificado"
                    />
                </div>

                <button className="bg-(--color2) w-full py-2 rounded-sm mt-5 cursor-pointer text-(--headline) font-medium">
                    {isEnroll ? 'Continuar curso' : 'Inscrever-se'}
                </button>
            </div>
        </aside>
    );
}

interface EnrollCardItemProps {
    text: string;
    icon: ReactNode;
}

function EnrollCardItem({ text, icon }: EnrollCardItemProps) {
    return (
        <div className="flex items-center gap-2 text-sm">
            {icon}
            <p className="font-medium">{text}</p>
        </div>
    );
}
