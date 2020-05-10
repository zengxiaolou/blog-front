const getters = {
    token: state => state.user.token,
    username: state => state.user.username,
    captcha_key: state => state.user.captcha_key,
    captcha_image: state => state.user.captcha_image,
};
export default getters
