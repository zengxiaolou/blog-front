/*
@AUTHOR:        zeng_xiao_yu
@GITHUB:        https://github.com/zengxiaolou
@EMAIL:         zengevent@gmail.com
@TIME:          2020/8/30-09:41
INTRODUCTION    文章相关
*/

import request from "../utils/service/request"

// 上传文章相关数据
export function uploadArticle(data) {
    return request({
        url:"article/add/",
        method: "post",
        data: data
    })
}
