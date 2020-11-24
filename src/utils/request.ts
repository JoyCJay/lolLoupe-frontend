import { config } from "../config";
import axios from "axios";

const instance = axios.create({
    timeout: 5000,
    baseURL: config.apiBaseUrl
});
instance.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const httpCode = {
    400: "请求参数错误",
    401: "权限不足, 请重新登录",
    403: "服务器拒绝本次访问",
    404: "请求资源未找到",
    500: "内部服务器错误",
    501: "服务器不支持该请求中使用的方法",
    502: "网关错误",
    504: "网关超时"
};

// /** interceptors for request **/
instance.interceptors.request.use(
    config => {
        config.headers["token"] = sessionStorage.getItem("token") || "";
        // TODO #1 UI loading
        // loadingInstance = Loading.service({
        //     spinner: "fa fa-spinner fa-spin fa-3x fa-fw",
        //     text: "拼命加载中..."
        // });

        // TODO #2 Reconfiguration
        // if (config) {

        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// // /** interceptors for response  **/
// instance.interceptors.response.use(
//     response => {
//         // TODO #1
//         if (response.data.status === "ok") {
//             return Promise.resolve(response.data);
//         } else {
//             // Message({
//             //     message: response.data.message,
//             //     type: "error"
//             // });
//             return Promise.reject(response.data.message);
//         }
//     },
//     error => {
//         // loadingInstance.close();
//         if (error.response) {
//             // 根据请求失败的http状态码去给用户相应的提示
//             const tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message;
//             console.error(tips);
//             return Promise.reject(error);
//         } else {
//             // Message({
//             //     message: "请求超时, 请刷新重试",
//             //     type: "error"
//             // });
//             return Promise.reject(new Error("请求超时, 请刷新重试"));
//         }
//     }
// );

/* 统一封装get 和 post请求 */
const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: "get",
            url,
            params,
            ...config
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: "post",
            url,
            data,
            ...config
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const instanceCDN = axios.create({
    timeout: 5000,
    baseURL: `https://raw.communitydragon.org/${config.version}`
});

const getCDN = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instanceCDN({
            method: "get",
            url,
            params,
            ...config
        })
            .then(response => resolve(response))
            .catch(error => reject(error));
    });
};

export { get, post, getCDN };
