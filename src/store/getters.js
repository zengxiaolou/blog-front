const getters = {
    token: state => state.user.token,
    username: state => state.user.username,
    loginVisible: state => state.user.loginVisible,
    registerVisible: state => state.user.registerVisible,
    article_num: state => state.article.article_num,
    view_num: state => state.article.view_num,
    like_num: state => state.article.like_num,
    category: state => state.article.category,
    tags: state => state.article.tags,
    email: state => state.user.email,
    avatar: state => state.user.avatar,
    is_staff: state => state.user.is_staff,
    mobile: state => state.user.mobile,
    nickname: state => state.user.nickname,
    role: state => state.user.role

};
export default getters
