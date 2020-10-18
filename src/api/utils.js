import request from "@/utils/service/request"

// 获取图形验证码
export function captcha() {
    return request({
        url: 'utils/captcha/',
        method: 'post'
        })
}

// 检查图形验证码是否正确
export function checkCaptcha(data) {
    return request({
        url: 'utils/check-captcha/',
        method: 'post',
        data: data
    })
}

// 获取七牛云token
export function getQiNiuToken(data) {
    return request({
        url: 'utils/qiniu-token/',
        method: 'post',
        data: data
    })
}

// 获取短信验证码
export function getSms(data){
    return request({
        url: 'utils/sms/',
        method: 'post',
        data: data
    })
}

// 获取邮箱验证码
export function getEmailSms(data){
    return request({
        url: 'utils/get-sms/',
        method: 'post',
        data:data
    })
}

// 检查验证是否通过
export function verify(data){
    return request({
        url: 'utils/verify/',
        method: 'post',
        data: data
    })
}
