import { login, getInfo, captcha, register} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/service/cookie'
import {Message} from "element-ui";

const state = {
    token: getToken(),
    username: '',
    captcha_image: '',
    captcha_key: '',
    method: 'login',
};

const mutations = {
    SET_TOKEN: (state, token) =>{
        state.token = token
    },
    DELETE_TOKEN:(state) => {
        removeToken();
        state.token = ''
    },
    SET_USERNAME: (state, username) => {
        state.name = username
    },
    SET_CAPTCHA_KEY:(state, captcha_key) =>{
        state.captcha_key = captcha_key
    },
    SET_CAPTCHA_IMAGE:(state, captcha_image) =>{
        state.captcha_image = captcha_image
    },
};

const actions = {
    // 获取图形验证
    captcha({commit}){
        return new Promise((resolve, reject) =>{
            captcha().then(response => {
                const data = response;
                commit('SET_CAPTCHA_KEY', data.captcha_key);
                commit('SET_CAPTCHA_IMAGE', data.captcha_image);
                resolve(data);
            }).catch(error =>{
                reject(error)
            })
        });
    },

    //user login
    login({commit}, userInfo){
        const {username, password,captcha_key,captcha_value} = userInfo;
        return new Promise((resolve, reject) =>{
            login({username:username.trim(), password:password,captcha_key:captcha_key,captcha_value:captcha_value}).then(response => {
                    const {token, username,id} = response;
                    commit('SET_TOKEN', token);
                    commit('SET_USERNAME', username);
                    localStorage.id = id;
                    setToken(token);
                    resolve(response);
                }).catch(error =>{
                    reject(error)
            })
        })
    },
    //用户注册
    register({commit},userInfo){
        const {username,password,password_again,mobile,sms} = userInfo;
        return new Promise((resolve, reject) =>{
            register({username:username.trim(), password:password,password_again:password_again,mobile:mobile,sms:sms})
                .then(response => {
                    const {token,username,id} =response;
                    commit('SET_TOKEN', token);
                    commit('SET_USERNAME', username);
                    localStorage.id = id;
                    setToken(token);
                    resolve(response);
                }).catch(error =>{
                    reject(error)
            })
        })
    },
    // 退出登录
    logout({commit}){
        commit('DELETE_TOKEN')
    },
    // 获取基本信息
    getUserInfo({commit}){
        return new Promise((resolve, reject) =>{
            getInfo(localStorage.id).then(response =>{

                resolve(response);
            }).catch(err => {
                for (let key in err.response.data){
                    Message.error(err.response.data[key].toString())
                }
                reject(err)
            })
        })
    }
};

export default {
    namespace: true,
    state,
    mutations,
    actions,
}
