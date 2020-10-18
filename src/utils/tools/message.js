/*
@AUTHOR:        zeng_xiao_yu
@GITHUB:        https://github.com/zengxiaolou
@EMAIL:         zengevent@gmail.com
@TIME:          2020/9/4-00:08
INTRODUCTION    文件描述
*/
import {Message} from "element-ui";
export function errorTips(err){
    try {
        const key = Object.keys(err.response.data);
        console.log(err.response)
        if (key.length === 1){
            Message.error(err.response.data[key][0].toString());
        }else  {
            Message.error(err.response.data[key[0]][0].toString())
        }
    }catch(err) {
        // Message.error(err.toString())
    }

}
