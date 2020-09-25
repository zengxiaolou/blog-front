/*
@AUTHOR:        zeng_xiao_yu
@GITHUB:        https://github.com/zengxiaolou
@EMAIL:         zengevent@gmail.com
@TIME:          2020/9/25-16:21
INTRODUCTION:   文件简介
*/

import request from "../utils/service/request"

export function giveLike(id, data){
    return request({
        url: `operations/like/${id}/`,
        method: 'put',
        data: data
    })
}
