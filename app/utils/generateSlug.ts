export const generateSlug = (title: string) => {
    return title
        .toLowerCase()
        .normalize('NFD') // remove acentos
        .replace(/[\u0300-\u036f]/g, '') // remove caracteres de acento
        .replace(/[^\w\s-]/g, '') // remove símbolos
        .trim()
        .replace(/\s+/g, '-'); // troca espaços por hífens
};
