import request from "@/utils/service/request"

// 获取图形验证码
export function captcha() {
    return request({
        url: 'api/v1/utils/captcha/',
        method: 'post'
        })
}

export function checkCaptcha(data) {
    return request({
        url: 'api/v1/utils/check-captcha/',
        method: 'post',
        data: data
    })
}
