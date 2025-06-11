import { Outlet } from 'react-router';
import avatar from './avatar.png';
import Sidebar from '~/components/sidebar';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileSidebar from '~/components/mobile-sidebar';

export default function PlataformLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function teste() {
        console.log('aaaaaaaaa');
        setSidebarOpen(!sidebarOpen);
    }
    return (
        <div className="flex bg-[#17161b] relative">
            <div className="fixed top-0 left-0 w-full z-50 bg-yellow-400 overflow-hidden text-[#17161b]">
                <div className="marquee">
                    <div className="marquee-content">
                        <span>
                            🚧 Projeto em desenvolvimento • Projeto em
                            desenvolvimento • Projeto em desenvolvimento •{' '}
                        </span>
                        <span>
                            🚧 Projeto em desenvolvimento • Projeto em
                            desenvolvimento • Projeto em desenvolvimento •{' '}
                        </span>
                    </div>
                </div>
            </div>

            <button
                className="absolute top-12 rounded-full left-2 block md:hidden"
                onClick={teste}
            >
                <Menu className="size-7 text-(--headline)" />
            </button>

            {sidebarOpen && <MobileSidebar clouseSidebar={teste} />}
            <Sidebar />
            <main className="bg-[#17161b] flex-1 pl-8 md:pl-32 h-screen text-gray-700 pr-8 overflow-x-auto pb-4 pt-5 mt-5 md:mt-0">
                <Outlet />
            </main>
        </div>
    );
}
// flex-1 px-6 py-5 overflow-y-auto text-gray-100
