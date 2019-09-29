/**
 * article模块接口列表
 */

import base from './base';          // 导入接口域名列表
import http from '../request/http.js';  // 导入http中创建的axios实例
// import qs from 'qs';                // 根据需求是否导入qs模块

const realTime = {
    online() {
        return http.get(`${base.baseU1}/realtime/online`)
    },
    // 新闻列表    
    articleList() {
        return http.get(`${base.baseU1}/topics`);
    },
    // 新闻详情,演示    
    articleDetail(id, params) {
        return http.get(`${base.baseU1}/topic/${id}`, {
            params: params
        });
    },
    // // post提交    
    // login(params) {
    //     return http.post(`${base.baseU1}/accesstoken`, qs.stringify(params));
    // }
    // 其他接口…………
}

export default realTime;