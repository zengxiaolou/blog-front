import { login, getInfo, register} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/service/cookie'
import {Message} from "element-ui";
import {errorTips} from "@/utils/tools/message";

const state = {
    token: getToken(),
    username: '',
    loginVisible: false,
    registerVisible: false,
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
    SET_LOGIN_VISIBLE: (state, login) => {
        state.loginVisible = login
    },
    SET_REGISTER_VISIBLE: (state, register) => {
        state.registerVisible =  register
    },

};

const actions = {
    //user login
    login({commit}, userInfo){
        const {username, password,captcha_key,captcha} = userInfo;
        return new Promise((resolve, reject) =>{
            login({username:username.trim(), password:password,captcha_key:captcha_key,captcha_value:captcha}).then(response => {
                    const {token, username,id, role} = response;
                    commit('SET_TOKEN', token);
                    commit('SET_USERNAME', username);
                    localStorage.id = id;
                    localStorage.role = role;
                    setToken(token);
                    resolve(response);
                }).catch(error =>{
                    reject(error)
            })
        })
    },
    //用户注册
    register({commit},userInfo){
        const {username,password,email,sms} = userInfo;
        console.log(userInfo)
        return new Promise((resolve, reject) =>{
            register({username:username.trim(), password:password, email:email, sms:sms})
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
    // 获取基本信息
    getUserInfo({commit}){
        return new Promise((resolve, reject) =>{
            getInfo(localStorage.id).then(response =>{
                resolve(response);
            }).catch(err => {
                errorTips(err)
                reject(err)
            })
        })
    },
    setLoginVisible({commit}, val){
        return new Promise((resolve) => {
            commit('SET_LOGIN_VISIBLE', val)
            resolve(val)
        })
    },
    setRegisterVisible({commit}, val){
        return new Promise((resolve) => {
            commit('SET_REGISTER_VISIBLE', val)
            resolve(val)
        })
    }
};

export default {
    namespace: true,
    state,
    mutations,
    actions,
}
