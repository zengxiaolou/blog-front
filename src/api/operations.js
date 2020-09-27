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
export function getComment(param){
    return request({
        url: 'operations/comment/',
        method: 'get',
        params: param
    })
}
