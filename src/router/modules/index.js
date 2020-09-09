/*
../..AUTHOR:  zeng_xiao_yu
../..GITHUB:  https://github.com/zengxiaolou
../..EMAIL:   zengevent../..gmail.com
../..TIME:    2020/5/10-17:08
*/

const indexRouter = [
    {
        path: '/base-style',
        component: () => import('../../views/index/index'),
        name: 'base-style',
        meta: {
            title: '基础页',
            auth: false,
        },
        children:[
            {
                path: "/index",
                component: () => import('../../views/home/index'),
                name: 'index',
                meta: {
                    title: "首页",
                    auth: false,
                }
            },
            {
                path: "/index/:search",
                component: () => import('../../views/home/index'),
                name: 'index',
                meta: {
                    title: "首页",
                    auth: false,
                }
            },
            {
                path: "/archive",
                component: () => import("../../views/archive/index"),
                name: "archive",
                meta: {
                    title: "归档",
                    auth: false
                }
            },
            {
                path: "/about",
                component: () => import("../../views/blog/index"),
                name: "blog",
                meta: {
                    title: "关于博客",
                    auth: false
                }
            },
            {
                path: "/introduction",
                component: () => import("../../views/introduction/index"),
                name: "introduction",
                meta: {
                    title: "自我简介",
                    auth: false
                }
            },
            {
                path: "/sponsor",
                component: () => import("../../views/sponsor/index"),
                name: "sponsor",
                meta: {
                    title: "请我喝咖啡",
                    auth: false
                }
            },
            {
                path: "/detail/:detail",
                component: () => import("../../views/detail/index"),
                name: "detail",
                meta: {
                    title: "文章详情",
                    auth: false
                }
            },
            {
                path: "/article/:article",
                component: () => import("../../views/article/index"),
                name: "article",
                meta: {
                    title: "文章搜索结果",
                    auth: false
                }
            },
            {
                path: "/label/:label",
                component: () => import("../../views/label/index"),
                name: "label",
                meta: {
                    title: "标签搜索结果",
                    auth: false
                }
            },
            {
                path: "/search/",
                component: () => import("../../views/search/index"),
                name: "search",
                meta: {
                    title: "全文搜索结果",
                    auth: false
                }
            },
            {
                path: "/search/:search",
                component: () => import("../../views/search/index"),
                name: "search",
                meta: {
                    title: "全文搜索结果",
                    auth: false
                }
            },
            {
                path: "/creation",
                component: () => import("../../views/creation/index"),
                name: "creation",
                meta: {
                    title: "创作中心",
                    auth: false
                }
            },

        ]
    },

    {
        path: '/',
        redirect: {
            path: '/index/all',
        }
    },
];



export default indexRouter
