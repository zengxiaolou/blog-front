/*
@AUTHOR:        zeng_xiao_yu
@GITHUB:        https://github.com/zengxiaolou
@EMAIL:         zengevent@gmail.com
@TIME:          2020/10/21-23:52
INTRODUCTION    文件描述
*/
import request from "../utils/service/request"

export function getStatistics(){
    return request({
        url: 'statistics/base/',
        method: 'get',
    })
}
