import { Outlet } from 'react-router';
import avatar from './avatar.png';
import Sidebar from '~/components/sidebar';

export default function PlataformLayout() {
    return (
        <div className="flex bg-[#17161b]">
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

            <Sidebar />
            <main className="bg-[#17161b] flex-1 pl-32 h-screen text-gray-700 pr-8 overflow-x-auto pb-4 pt-5">
                <Outlet />
            </main>
        </div>
    );
}
// flex-1 px-6 py-5 overflow-y-auto text-gray-100
