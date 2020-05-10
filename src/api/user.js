import request from "@/utils/service/request"

// 登录
export function login(data) {
    return request({
        url:'api/login/',
        method:'post',
        data
    })
}

// 获取用户信息
export function getInfo(id) {
    return request({
        url:`api/users/${id}/`,
        method: 'get',
    })
}

// 注册用户
export function register(data) {
    return request({
        url: 'api/users/',
        method: 'post',
        data
    })
}

//登出
export function logout() {
    return request({
        url:'api/user/logout/',
        method: 'post'
    })
}
