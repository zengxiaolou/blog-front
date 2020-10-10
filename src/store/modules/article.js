/*
@AUTHOR:  zeng_xiao_yu
@GITHUB:  https://github.com/zengxiaolou
@EMAIL:   zengevent@gmail.com
@TIME:    2020/9/9-16:56
*/

import {categoryAndTag, getViewAndLike} from "api/article";
import tags from "views/creation/components/tags";
import {register} from "api/user";
import {setToken} from "utils/service/cookie";

const state = {
    article_num: '',
    view_num: '',
    like_num: '',
    tags: [],
    category: '',
};

const mutations = {
    SET_ARTICLE_NUM: (state, article) => {
        state.article_num = article
    },
    SET_VIEW_NUM: (state, view) => {
        state.view_num = view
    },
    SET_LIKE_NUM: (state, like) => {
        state.like_num = like
    },
    SET_TAGS: (state, tags) => {
        state.tags = tags
    },
    SET_CATEGORY: (state, category) => {
        state.category = category
    }
};

const actions = {
    async getViewAndLike({commit}){
        await getViewAndLike().then(res => {
            let article_num = res['total_article'];
            let view_num = res['total_view'];
            let like_num = res['total_like'];
            commit('SET_ARTICLE_NUM', article_num);
            commit('SET_VIEW_NUM', view_num);
            commit('SET_LIKE_NUM', like_num);})
    },
    addition({commit}, id){
        return new Promise((resolve, reject) =>{
            categoryAndTag(id).then(res => {
                Array.prototype.randomElement = function () {
                    return this[Math.floor(Math.random() * this.length)]
                };
                let tagType = ['success', 'info', 'warning', 'danger', ""];
                commit('SET_CATEGORY', res['category']['category'])
                for (let i of Object.keys(res['tag'])){
                    res['tag'][i]['type'] = tagType.randomElement()
                }
                commit('SET_TAGS', res['tag'])
                resolve(res);
            }).catch(error =>{
                reject(error)
            })
        })
    },
    // 获取基本信息
};

export default {
    namespace: true,
    state,
    mutations,
    actions
}
