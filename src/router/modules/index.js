/*
@AUTHOR:  zeng_xiao_yu
@GITHUB:  https://github.com/zengxiaolou
@EMAIL:   zengevent@gmail.com
@TIME:    2020/5/10-17:08
*/

const indexRouter = [
    {
        path: '/index',
        component: () => import('@/views/index/index'),
        name: 'index',
        meta: {
            title: '首页',
            auth: false,
        },
    },
    {
        path: '/',
        redirect: {
            path: '/index',
        }
    },
];



export default indexRouter
