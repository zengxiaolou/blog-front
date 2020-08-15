/*
@AUTHOR:  zeng_xiao_yu
@GITHUB:  https://github.com/zengxiaolou
@EMAIL:   zengevent@gmail.com
@TIME:    2020/5/10-17:08
*/

const indexRouter = [
    {
        path: '/base-style',
        component: () => import('@/views/index/index'),
        name: 'base-style',
        meta: {
            title: '基础页',
            auth: false,
        },
        children:[
            {
                path: "/index",
                component: () => import('@/views/home/home'),
                name: 'index',
                meta: {
                    title: "首页",
                    auth: false,
                }
            },
            {
                path: "/archive",
                component: () => import("@/views/archive/archive"),
                name: "archive",
                meta: {
                    title: "归档",
                    auth: false
                }
            },
            {
                path: "/about",
                component: () => import("@/views/blog/blog"),
                name: "blog",
                meta: {
                    title: "关于博客",
                    auth: false
                }
            },
        ]
    },

    {
        path: '/',
        redirect: {
            path: '/index',
        }
    },
];



export default indexRouter
