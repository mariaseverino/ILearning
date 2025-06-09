import { BookMarked, BookOpen, DoorOpen, House, Settings } from 'lucide-react';
import { NavLink } from 'react-router';

export default function Sidebar() {
    return (
        <aside className="h-screen fixed w-24 flex flex-col items-center justify-center">
            <div className="bg-(--card-background) flex flex-col justify-between h-2/3 ml-4 rounded-full">
                <nav className="flex flex-col gap-4 items-center">
                    <NavLink
                        to="/my-profile"
                        className={({ isActive }) =>
                            `p-3 ${
                                isActive ? 'bg-(--color2)/20 rounded-full' : ''
                            }`
                        }
                    >
                        <House className="size-8 text-(--color2) " />
                    </NavLink>
                    <NavLink
                        to="/enroll-courses"
                        className={({ isActive }) =>
                            `p-3 ${
                                isActive ? 'bg-(--color2)/20 rounded-full' : ''
                            }`
                        }
                    >
                        <BookMarked className="size-8 text-(--color2) " />
                    </NavLink>
                    <NavLink
                        to="/catalog"
                        className={({ isActive }) =>
                            `p-3 ${
                                isActive ? 'bg-(--color2)/20 rounded-full' : ''
                            }`
                        }
                    >
                        <BookOpen className="size-8 text-(--color2) " />
                    </NavLink>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            `p-3 ${
                                isActive ? 'bg-(--color2)/20 rounded-full' : ''
                            }`
                        }
                    >
                        <Settings className="size-8 text-(--color2) " />
                    </NavLink>
                </nav>
                <div className="flex flex-col gap-2 items-center">
                    <div className="">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                            alt="Foto de perfil"
                            className="h-[32px] w-[32px] object-cover rounded-full"
                        />
                    </div>
                    <button className="rounded-full p-3 cursor-pointer">
                        <DoorOpen className="size-8 text-(--color2)" />
                    </button>
                </div>
            </div>
        </aside>
    );
}
