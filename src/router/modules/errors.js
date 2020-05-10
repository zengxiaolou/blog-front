const errors =[
    {
        path: '/404',
        name: 'error_404',
        component: () =>import('@/components/error/error_404'),
        meta: {
        title: '404',
            auth: false,
        }
    },
    {
        path: '/400',
            name: 'error_400',
        component: () =>import('@/components/error/error_400'),
        meta: {
        title: '400',
            auth: false,
        }
    },
    {
        path: '/401',
            name: 'error_401',
        component: () =>import('@/components/error/error_401'),
        meta: {
        title: '401',
            auth: false,
        }
    },
    {
        path: '/403',
        name: 'error_403',
        component: () =>import('@/components/error/error_403'),
        meta: {
            title: '403',
            auth: false,
        }
    },
    {
        path: '/408',
        name: 'error_408',
        component: () =>import('@/components/error/error_408'),
        meta: {
            title: '408',
            auth: false,
        }
    },
    {
        path: '/500',
        name: 'error_500',
        component: () =>import('@/components/error/error_500'),
        meta: {
            title: '500',
            auth: false,
        }
    },
    {
        path: '/501',
        name: 'error_501',
        component: () =>import('@/components/error/error_501'),
        meta: {
            title: '501',
            auth: false,
        }
    },
    {
        path: '/502',
        name: 'error_502',
        component: () =>import('@/components/error/error_502'),
        meta: {
            title: '502',
            auth: false,
        }
    },
    {
        path: '/503',
        name: 'error_503',
        component: () =>import('@/components/error/error_503'),
        meta: {
            title: '503',
            auth: false,
        }
    },
    {
        path: '/504',
        name: 'error_504',
        component: () =>import('@/components/error/error_503'),
        meta: {
            title: '504',
            auth: false,
        }
    },
    {
        path: '/505',
        name: 'error_505',
        component: () =>import('@/components/error/error_505'),
        meta: {
            title: '505',
            auth: false,
        }
    },
    {
        path: '*',
            redirect: {
        path: '/404'
        }
    },
];

export default errors
