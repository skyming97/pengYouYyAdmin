/**
 * 基于ele的loading方法
 */
import Vue from 'vue'

let loading   // 用于控制加载结束
/**
 * 开始加载
 */
function startLoading() {
    loading = Vue.prototype.$loading({
        lock: true,
        target: document.querySelector(".el-main")  // 加载动画的位置
    })
}
/**
 * 停止加载
 */
function endLoading() {
    loading.close()
}

/**
 * 显示加载动画
 */
let needLoadingReqCount = 0     // 需要加载的请求的个数
export function showLoading() {
    needLoadingReqCount == 0 && startLoading()
    needLoadingReqCount++
}

/**
 * 隐藏加载动画
 */
export function hideLoading() {
    if (needLoadingReqCount <= 0) return
    needLoadingReqCount--
    needLoadingReqCount == 0 && endLoading()
}