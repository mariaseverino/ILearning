import CategoryFilter from './category-filter';

export default function CatalogFilter() {
    const categories = {
        competencias: [
            'JavaScript',
            'Arquitetura',
            'React Native',
            'Mobile',
            'Cross-Platform',
            'DevOps',
        ],
        dificuldades: ['iniciante', 'intermediário', 'avançado'],
    };
    return (
        <aside>
            <h2 className="text-xl font-semibold mb-4 text-(--headline)">
                Filtre os cursos
            </h2>
            <div className="flex flex-col gap-5">
                <div>
                    <h3 className="text-md font-medium mb-3 text-(--headline)">
                        Competências
                    </h3>
                    <CategoryFilter
                        category="competencias"
                        categoryOptions={categories.competencias}
                    />
                </div>
                <div>
                    <h3 className="text-md font-medium mb-3 text-(--headline)">
                        Dificuldades
                    </h3>
                    <CategoryFilter
                        category="dificuldades"
                        categoryOptions={categories.dificuldades}
                    />
                </div>
            </div>
        </aside>
    );
}
