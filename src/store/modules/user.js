import { login, getInfo, register} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/service/cookie'
import {Message} from "element-ui";
import {errorTips} from "@/utils/tools/message";

const state = {
    token: getToken(),
    username: '未登录',
    id: '',
    loginVisible: false,
    registerVisible: false,
    mobile: '',
    is_staff: false,
    avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    email: '',
    nickname: '',
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
        state.username = username
    },
    SET_NICKNAME:(state, nickname) => {
        state.nickname = nickname
    },
    SET_LOGIN_VISIBLE: (state, login) => {
        state.loginVisible = login
    },
    SET_REGISTER_VISIBLE: (state, register) => {
        state.registerVisible =  register
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar =  avatar
    },
    SET_MOBILE: (state, mobile) => {
        state.mobile = mobile
    },
    SET_EMAIL: (state, email) => {
        state.email = email
    },
    SET_IS_STAFF: (state, is_staff) => {
        state.is_staff = is_staff
    },
    SET_ID: (state, id) => {
        state.id = id
    }
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
        const {username,password,mobile,sms} = userInfo;
        return new Promise((resolve, reject) =>{
            register({username:username.trim(), password:password, mobile:mobile, sms:sms})
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
                const {id, mobile, is_staff, username, avatar, email, nickname} = response
                commit('SET_ID', id)
                commit('SET_USERNAME', username);
                commit('SET_MOBILE', mobile)
                commit('SET_IS_STAFF', is_staff)
                commit('SET_AVATAR', avatar)
                commit('SET_EMAIL', email)
                commit('SET_NICKNAME', nickname)
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
