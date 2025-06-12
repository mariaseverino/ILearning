import type { Lesson } from './lesson';

export interface Course {
    id: string;
    title: string;
    description: string;
    category?: string;
    instructor?: string;
    thumbnailUrl?: string;
    lessons?: Lesson[];
}
