/*
@AUTHOR:        zeng_xiao_yu
@GITHUB:        https://github.com/zengxiaolou
@EMAIL:         zengevent@gmail.com
@TIME:          2020/8/30-09:41
INTRODUCTION    文章相关
*/

import request from "../utils/service/request"

///////////////////////////////////获取概要//////////////////////////////
export function getViewAndLike(params) {
    return request({
        url: 'article/info/',
        method: 'get',
        params: params
    })
}

export function getLastYearData() {
    return request({
        url: 'article/last-data/',
        method: 'get'
    })
}

export function getArticleLike(params){
    return request({
        url: 'article/like/',
        method: 'get',
        params: params
    })
}

////////////////////////////////////文章相关//////////////////////////////
// 上传文章相关数据
export function uploadArticle(data) {
    return request({
        url:"article/article/",
        method: "post",
        data: data
    })
}

// 条件获取文章文章
export function getArticle(params) {
    return request({
        url: `article/search/article/`,
        method: 'get',
        params: params,
    })
}

// 文章预览
export function getOverview(params) {
    return request({
        url: `article/overview/`,
        method: 'get',
        params: params
    })
}

// 获取指定文章
export function getArticleByID(id) {
    return request({
        url: `article/search/article/${id}/`,
        method: 'get',
    })
}

export function deleteArticle(id) {
    return request({
        url: `article/article/${id}`,
        method: 'delete'
    })
}

export function getArticleContent(id) {
    return request({
        url: `article/article/${id}`,
        method: 'get'
    })
}

/////////////////////////////////////////草稿相关///////////////////////////////////
// 上传文章草稿箱
export function uploadDraft(data, id) {
    return request({
        url: `article/draft/${id}/`,
        method: "patch",
        data: data
    })
}

// 新建草稿
export function newDraft(data) {
    return request({
        url: "article/draft/",
        method: "post",
        data:data
    })
}

// 获取草稿箱
export function getDraft(params) {
    return request({
        url: "article/search/draft/",
        method: "get",
        params: params
    })
}

// 删除草稿
export function deleteDraft(id) {
    return request({
        url: `article/draft/${id}/`,
        method: 'delete'
    })
}
/////////////////////////////////////////分类与标签///////////////////////////////////
// 获取文章分类
export function getCategory(params) {
    return request({
        url: "article/get/category/",
        method: "get",
        params: params,
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
export function getTag(params) {
    return request({
        url: "article/get/tag/",
        method: "get",
        params: params
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
        url: `article/tag/${id}/`,
        method: "delete",
    })
}

//////////////////////////归档/////////////////////
export function getArchive(params) {
    return request({
        url: 'article/archive/',
        method: 'get',
        params:params
    })
}
