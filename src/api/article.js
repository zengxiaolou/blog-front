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
        url:"article/article-add/",
        method: "post",
        data: data
    })
}

// 获取文章分类
export function getCategory() {
    return request({
        url: "article/category/",
        method: "get"
    })
}

// 新增文章分类
export function addCategory(data) {
    return request({
        url: "article/category/",
        method: "post",
        data:data
    })
}

// 删除文章分类
export function deleteCategory(id) {
    return request({
        url: `article/category/${id}/`,
        method: "delete"
    })
}

// 获取文章标签
export function getTag() {
    return request({
        url: "article/tag/",
        method: "get",
    })
}

// 新增文章标签
export function addTag(data) {
    return request({
        url: "article/tag/",
        method: "post",
        data: data
    })
}

// 删除文章标签
export function deleteTag(id) {
    return request({
        url: `article/tag/${id}`,
        method: "delete",
    })
}
