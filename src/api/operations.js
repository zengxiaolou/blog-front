/*
@AUTHOR:        zeng_xiao_yu
@GITHUB:        https://github.com/zengxiaolou
@EMAIL:         zengevent@gmail.com
@TIME:          2020/9/25-16:21
INTRODUCTION:   文件简介
*/

import request from "../utils/service/request"

// 点赞
export function giveLike(id, data){
    return request({
        url: `operations/like/${id}/`,
        method: 'put',
        data: data
    })
}

// 评论
export function comment(data){
    return request({
        url: 'operations/comment/',
        method: 'post',
        data: data
    })
}

// 获取评论
export function getComment(params){
    return request({
        url: 'operations/comments/',
        method: 'get',
        params: params
    })
}

// 回复
export function reply(data) {
    return request({
        url: 'operations/reply/',
        method: 'post',
        data: data
    })
}

// 获取回复
export function getReply(params){
    return request({
        url: 'operations/replys/',
        method: 'get',
        params: params
    })

}

// 获取用户点赞过的文章
export function getUserLike(){
    return request({
        url: 'operations/user-like/',
        method: 'get',
    })
}
