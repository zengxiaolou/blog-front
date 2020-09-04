/*
@AUTHOR:  zeng_xiao_yu
@GITHUB:  https://github.com/zengxiaolou
@EMAIL:   zengevent@gmail.com
@TIME:    2020/9/4-11:25
*/
export function formatDateTime(dateStr, time){
    //得到特定的时间
    let date = new Date(dateStr);
    let year = date.getFullYear();
    //ES6语法填充：var month = (date.getMonth()+1).toString().padStart(2, '0');
    let month = date.getMonth()+1<10 ? '0'+ (date.getMonth()+1) : date.getMonth()+1;
    let day = date.getDate()<10 ? '0' + date.getDate() : date.getDate();
    let hh = date.getHours()<10 ? '0' + date.getHours() : date.getHours();
    let mm = date.getMinutes()<10 ? '0' + date.getMinutes() : date.getMinutes();
    let ss = date.getSeconds()<10 ? '0' + date.getSeconds() : date.getSeconds();

    //return `${year}-${month}-${day}`;

    if(time&&time.toLowerCase() === 'yyyy-mm-dd'){
        // 用模板字符串拼接
        return `${year}-${month}-${day}`;
    }else if(time&&time.toLowerCase() === 'hh:mm:ss'){
        return `${hh}:${mm}:${ss}`;
    }else{
        return `${year}-${month}-${day} ${hh}:${mm}:${ss}`;
    }
}

export default {
    formatDateTime
}
