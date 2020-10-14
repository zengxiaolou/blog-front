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
    //ES6语法填充：let month = (date.getMonth()+1).toString().padStart(2, '0');
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
function diffTime(startDate,endDate) {
    let diff=endDate.getTime() - startDate;//.getTime();//时间差的毫秒数

    //计算出相差天数
    let days=Math.floor(diff/(24*3600*1000));

    //计算出小时数
    let leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
    let hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    let leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    let minutes=Math.floor(leave2/(60*1000));

    //计算相差秒数
    let leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    let seconds=Math.round(leave3/1000);

    let returnStr = seconds + "秒前";
    if(minutes>0) {
        returnStr = minutes + "分钟前";//+ returnStr;
    }
    if(hours>0) {
        returnStr = hours + "小时前";// + returnStr;
    }
    if(days>0) {
        returnStr = days + "天前" ;//+ returnStr;
    }

    if ( days > 30){
        returnStr = days%30 + 1 + '月前'
    }

    if ( days > 365){
        returnStr = days%365 + '年前'
    }
    return returnStr;
}

export function formatDateTimeEx(dateStr, time){
    //得到特定的时间
    let startTime = new Date(dateStr);
    let endTime = new Date()
    let diff = diffTime(startTime, endTime)
    let date =  formatDateTime(dateStr, time)
    return date + '  ' + '(' + diff + ')'
}
export function nullChange(str){
    if (str === ''){
        return '未设置'
    }else {
        return str
    }
}

export default {
    formatDateTime,
    formatDateTimeEx,
    nullChange
}
