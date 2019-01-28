import axios from "axios"
const instance = axios.create({
    headers: {  
        'X-Requested-With': 'XMLHttpRequest',  
        "Accept": "application/json",  
        "Content-Type": "application/json; charset=UTF-8"  
    }
});
// 添加请求拦截器
instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么 
    //显示loading
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});
// 添加响应拦截器
instance.interceptors.response.use((response) => {
    // 对响应数据做点什么
    //隐藏loading
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
});
function initParams(params){
    // params.token="123";//axios公共参数配置
    return params
}
function getData(url,params,methods){
    //服务器代理选择
    const baseUrl="/apis";
    //发起请求
    const getResult=new Promise((resolve,reject) => {
        if(methods==="get"){
            instance.get(baseUrl + url,{params: initParams(params)})
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
        }else if(methods==="post"){
            instance.post(baseUrl + url,initParams(params))
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
        }
    });
    return getResult;
}
const axiosRequest={
    get(url,params){
        return getData(url,params,"get");
    },
    post(url,params){
        return getData(url,params,"post");
    }
}
export default axiosRequest