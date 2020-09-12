import request from "../utils/service/request"

// 登录
export function login(data) {
    return request({
        url:'user/login/',
        method:'post',
        data
    })
}

// 获取用户信息
export function getInfo(id) {
    return request({
        url:`users/${id}/`,
        method: 'get',
    })
}

// 注册用户
export function register(data) {
    return request({
        url: 'users/',
        method: 'post',
        data
    })
}
