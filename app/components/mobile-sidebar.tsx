import { BookMarked, BookOpen, DoorOpen, House, Settings } from 'lucide-react';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

interface NavLinkItemProps {
    navigateTo: string;
    children: ReactNode;
    className?: string;
}
export function NavLinkItem({
    navigateTo,
    children,
    className,
}: NavLinkItemProps) {
    return (
        <NavLink
            to={navigateTo}
            className={({ isActive }) =>
                `p-3 ${className} ${
                    isActive ? 'bg-(--color2)/20 rounded-full' : ''
                }`
            }
        >
            {children}
        </NavLink>
    );
}

interface MobileSidebarProps {
    clouseSidebar: () => void;
}

export default function MobileSidebar({ clouseSidebar }: MobileSidebarProps) {
    return (
        <div className="h-screen fixed w-screen grid grid-cols-4 justify-center">
            <div className="flex flex-col pl-4 flex-1 pt-15 bg-(--card-background) z-50 col-span-3">
                <div className="mb-5">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                        alt="Foto de perfil"
                        className="h-[50px] w-[50px] object-cover rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <nav className="flex flex-col gap-4 w-44">
                        <NavLinkItem
                            navigateTo="/my-profile"
                            className="flex items-center gap-2"
                        >
                            <House className="size-6 text-(--color2) " />
                            <span className="text-base">Meu Perfil</span>
                        </NavLinkItem>
                        <NavLinkItem
                            navigateTo="/enroll-courses"
                            className="flex items-center gap-2"
                        >
                            <BookMarked className="size-6 text-(--color2) " />
                            <span className="text-base">Meus cursos</span>
                        </NavLinkItem>
                        <NavLinkItem
                            navigateTo="/catalog"
                            className="flex items-center gap-2"
                        >
                            <BookOpen className="size-6 text-(--color2) " />
                            <span className="text-base">Catalogo</span>
                        </NavLinkItem>

                        <NavLinkItem
                            navigateTo="/settings"
                            className="flex items-center gap-2"
                        >
                            <Settings className="size-6 text-(--color2) " />
                            <span className="text-base">Configuracoes</span>
                        </NavLinkItem>
                    </nav>
                    <button className="rounded-full p-3 cursor-pointer flex items-center gap-2">
                        <DoorOpen className="size-6 text-(--color2)" />
                        <span className="text-base">Sair</span>
                    </button>
                </div>
            </div>
            <div className="bg-transparent" onClick={clouseSidebar}></div>
        </div>
    );
}
