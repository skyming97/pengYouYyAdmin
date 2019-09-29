export function getData(name) {
    if (!name && typeof name != 'string') return '需要string类型'
    return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : ''
}
export function setData(name, val) {
    if (!name && typeof name != 'string') return '需要string类型'
    if (!val) return 'item未设置'
    localStorage.setItem(name, JSON.stringify(val))
}