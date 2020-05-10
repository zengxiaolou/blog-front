import axios from 'axios';
import {Message} from "element-ui";
import store from '@/store';
import {getToken,removeToken} from "@/utils/service/cookie";
import el from "element-ui/src/locale/lang/el";
import router from "@/router";

const service = axios.create({
    timeout: 60000,
    baseURL: 'http://127.0.0.1:8000/',
});

//请求拦截器
service.interceptors.request.use(function (config) {
    const token = getToken('token');
    config.headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        "Authorization": "JWT " + token,
    };
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//响应拦截器

service.interceptors.response.use(
    response => {
        const dataAxios = response.data;
        // 这个状态码是和后端约定的
        const code = response.status;
        //根据 code 进行判断
        if (code === undefined){
            // 如果没有code 代表这不是项目后端开发的接口
            return dataAxios
        }else{
            //有 code代表这是一个后端接口 可以进行一步的判断
            return dataAxios
        }
    },
    error => {
        if (error && error.response){
            switch (error.response.status) {
                case 400:
                    error.message = '请求错误';
                    break;
                case 401:
                    error.message = "未授权，请登录";
                    router.push({name: 'error_401'});
                    removeToken();
                    router.push({name: 'login'});
                    break;
                case 403:
                    error.message = "拒绝访问";
                    router.push({name: 'error_403'});
                    break;
                case 404:
                    error.message = `请求地址出错：${error.response.config.url}`;
                    router.push({name: 'error_404'});
                    break;
                case 408:
                    error.message = '请求超时';
                    router.push({name: 'error_408'});
                    break;
                case 500:
                    error.message = '服务器内部错误';
                    router.push({name: 'error_500'});
                    break;
                case 501:
                    error.message = "服务未实现";
                    router.push({name: 'error_501'});
                    break;
                case 502:
                    error.message = "网关错误";
                    router.push({name: 'error_502'});
                    break;
                case 503:
                    error.message = "服务器不可用";
                    router.push({name: 'error_503'});
                    break;
                case 504:
                    error.message = "网关超时";
                    router.push({name: 'error_504'});
                    break;
                case 505:
                    error.message = "HTTP版本不受支持";
                    router.push({name: 'error_504'});
                    break;
                default: break
            }
        }
        return Promise.reject(error)
    }
);

export default service
