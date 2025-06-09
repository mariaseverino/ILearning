import { Skull } from 'lucide-react';
import type { Route } from './+types/settings';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Configurações' },
        {
            name: 'description',
            content: 'Gerencie suas configurações de conta',
        },
    ];
}

export default function Settings() {
    return (
        <div className="min-h-screen p-10 text-(--headline)">
            <h1 className="text-4xl font-bold mb-10">Configurações</h1>

            <div className="grid gap-8 max-w-5xl mx-auto">
                {/* Dados Pessoais */}
                <section className="bg-(--card-background) p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">
                        Dados Pessoais
                    </h2>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex flex-col items-center gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                                alt="Foto de perfil"
                                className="h-[200px] w-[200px] object-cover rounded-full border-4 border-(--color2)"
                            />
                            <label
                                htmlFor="avatar-upload"
                                className="text-sm text-(--color2) cursor-pointer border-dashed border-2 p-2 text-center rounded-md"
                            >
                                Trocar foto
                            </label>
                            <input
                                type="file"
                                id="avatar-upload"
                                className="hidden"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div>
                                    <p className="text-(--gray) text-sm">
                                        Nome completo
                                    </p>
                                    <p className="text-lg font-medium">
                                        Maria Rita de Souza Severino
                                    </p>
                                </div>
                                <div>
                                    <p className="text-(--gray) text-sm">
                                        Email
                                    </p>
                                    <p className="text-lg font-medium">
                                        mariarsseverino@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button className="border border-(--color2) text-(--color2) px-4 py-2 rounded-md hover:bg-(--color2)/10 transition">
                                    Editar Perfil
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Preferências */}
                <section className="bg-(--card-background) p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">
                        Preferências
                    </h2>
                    <div className="space-y-4">
                        <Toggle label="Tema escuro" id="theme" />
                        <Toggle label="Notificações" id="notification" />
                    </div>
                </section>

                {/* Excluir conta */}
                <section className="text-right">
                    <button className="flex items-center justify-end gap-2 text-red-600 hover:text-red-500 text-lg cursor-pointer transition">
                        <Skull className="w-5 h-5" />
                        Excluir conta
                    </button>
                </section>
            </div>
        </div>
    );
}

// Toggle component
function Toggle({ label, id }: { label: string; id: string }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-lg">{label}</span>
            <label className="inline-flex relative items-center cursor-pointer">
                <input
                    type="checkbox"
                    id={id}
                    name={id}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600 transition-colors"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
            </label>
        </div>
    );
}
