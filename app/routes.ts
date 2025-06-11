import {
    type RouteConfig,
    index,
    layout,
    route,
} from '@react-router/dev/routes';

export default [
    // index('routes/home.tsx'),
    // route('login', 'routes/login.tsx'),
    // route('register', 'routes/register.tsx'),
    layout('layout/plataform.layout.tsx', [
        // route('dashboard', 'routes/dashboard.tsx'),
        index('routes/my-profile.tsx'),
        route('catalog', 'routes/catalog.tsx'),
        route('enroll-courses', 'routes/enroll-courses.tsx'),
        route('settings', 'routes/settings.tsx'),
    ]),
    // layout('layout/layout.tsx', [
    //     route('course/:slug/overview', 'routes/course-overview.tsx'),
    //     route(
    //         'course/:slugCourse/lesson/:slugLesson',
    //         'routes/watch-lesson.tsx'
    //     ),
    // ]),
] satisfies RouteConfig;
