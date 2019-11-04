export const getTemplateTimeString = function(time, template) {
    template = template || 'yyyy-MM-dd hh:mm'

    time = new Date(time)

    let o = {
            '(M+)': time.getMonth() + 1, // time.getMonth() 从0月开始
            '(d+)': time.getDate(),
            '(h+)': time.getHours(),
            '(m+)': time.getMinutes(),
            '(s+)': time.getSeconds()
        }
        // 检测年
    if (/(y+)/g.test(template)) {
        template = template.replace(/(y+)/g, time.getFullYear())
    }

    for (let key in o) { //末班是一位 两位
        let exp = new RegExp(key, 'g')
        if (exp.test(template)) {
            // console.log(RegExp.$1)
            let str = getDateString(o[key], RegExp.$1)
            template = template.replace(exp, str)
        }
    }
    return template
}

function getDateString(time, temp) {
    time = time + ''
    if (temp.length === 1) {
        return time
    }
    return ('00' + time).substr(time.length)
}