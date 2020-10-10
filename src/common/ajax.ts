import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import qs from 'qs';

interface Result {
    code: number;
    data: any;
    msg: string;
}
/**
 * 请求封装
 * 1.处理get，delete参数
 * 2.超时处理
 * 3.code检测，非200进入catch
 * 4.返回后端返回对象中的data,code非200返回后端返回的对象
 * 注意：
 * status异常时，返回error对象并reject，不用额外检测
 * code非200，不要统一错误处理，业务场景不同可能交互逻辑不同
 */

// 请求错误传递undefined进入catch
// const checkStatus = (res: AxiosResponse<Result>) => (res.statusText === 'OK' ? res : Promise.reject(res.data));

// code非200传递请求结果进入catch
// const checkCode = (res: AxiosResponse<Result>) => {
//     if (res.data.code === 200) {
//         return Promise.resolve(res.data.data);
//     }
//     return Promise.reject(res.data);
// };

// const defaultOpts = {
//     timeout: 3000
// };

// const request = (opts = {}) => axios(Object.assign(defaultOpts, opts)).then(checkCode);

// export const get = (url: string, params = {}) => request({
//     mothod: 'get',
//     url,
//     params,
//     paramsSerializer: (paramsObj = {}) => qs.stringify(paramsObj, { indices: false })
// });

// export const post = (url: string, params = {}) => request({
//     mothod: 'post',
//     url,
//     params
// });

// export const put = (url: string, params = {}) => request({
//     mothod: 'put',
//     url,
//     params
// });

// export const del = (url: string, params = {}) => request({
//     mothod: 'delete',
//     url,
//     params,
//     paramsSerializer: (paramsObj = {}) => qs.stringify(paramsObj, { indices: false })
// });


const service = axios.create({
    timeout: 3000,
    withCredentials: true
});

service.interceptors.request.use();
service.interceptors.response.use((res) => {
    if (res.data.code === 200) {
        return Promise.resolve(res.data.data);
    }
    return Promise.reject(res.data);
}, (err) => Promise.reject(err));

export const get = (url: string, params = {}) => service({
    method: 'get',
    url,
    params,
    paramsSerializer: (paramsObj = {}) => qs.stringify(paramsObj, { indices: false })
});

export const post = (url: string, data = {}) => service({
    method: 'post',
    url,
    data
});

export const put = (url: string, data = {}) => service({
    method: 'put',
    url,
    data
});

export const del = (url: string, params = {}) => service({
    method: 'delete',
    url,
    params,
    paramsSerializer: (paramsObj = {}) => qs.stringify(paramsObj, { indices: false })
});
