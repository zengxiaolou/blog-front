import request from "@/utils/service/request"

// 获取图形验证码
export function captcha() {
    return request({
        url: 'utils/captcha/',
        method: 'post'
        })
}

export function checkCaptcha(data) {
    return request({
        url: 'utils/check-captcha/',
        method: 'post',
        data: data
    })
}

export function getQiNiuToken(data) {
    return request({
        url: 'utils/qiniu-token/',
        method: 'post',
        data: data
    })
}

export function getSms(data){
    return request({
        url: 'utils/get-sms/',
        method: 'post',
        data: data
    })
}
