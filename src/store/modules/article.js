/*
@AUTHOR:  zeng_xiao_yu
@GITHUB:  https://github.com/zengxiaolou
@EMAIL:   zengevent@gmail.com
@TIME:    2020/9/9-16:56
*/

import {getViewAndLike} from "api/article";

const state = {
    article_num: '',
    view_num: '',
    like_num: '',

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
    }
};

export default {
    namespace: true,
    state,
    mutations,
    actions
}
