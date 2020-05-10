const loginRouter = {
    path: '/login',
    component: () => import('@/views/login/login'),
    name: 'login',
    meta: {
        title: '登录',
        auth: false,
    },
};



export default loginRouter
