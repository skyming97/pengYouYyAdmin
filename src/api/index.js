/** 
 * api接口的统一出口
 */

// 文章模块接口
import article from '@/api/article';
import realTime from '@/api/realTime';
// 其他模块的接口……

// 导出接口
export default {
    article,
    realTime
}
