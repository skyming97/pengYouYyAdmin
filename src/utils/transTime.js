/**
 * 格式化日期时间函数
 * @param {*} date GTM格式的日期时间
 */
export function transTime(date) {
    var Y = date.getFullYear() + '-',
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
    D = date.getDate() + ' ',
    h = date.getHours() + ':',
    m = date.getMinutes() + ':',
    s = date.getSeconds()
    return Y + M + D + h + m + s //呀麻碟
}