const getters = {
    token: state => state.user.token,
    username: state => state.user.username,
    loginVisible: state => state.user.loginVisible,
    registerVisible: state => state.user.registerVisible,
    article_num: state => state.article.article_num,
    view_num: state => state.article.view_num,
    like_num: state => state.article.like_num,

};
export default getters
